import traceback

import vertexai
from vertexai.generative_models import GenerativeModel
import functions_framework


@functions_framework.http
def generate_ppp_opinion(request):
    """
    Generator opinii do PPP - wersja scalona
    Format: {imie, wiek, klasa, sekcje: {...}}
    Model: Gemini 3.8 Flash (Vertex, location=global)
    Prompt: 8 akapitow wg dokumentu poradni
    """

    # CORS headers
    if request.method == "OPTIONS":
        headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "3600",
        }
        return ("", 204, headers)

    headers = {"Access-Control-Allow-Origin": "*"}

    try:
        request_json = request.get_json(silent=True)

        # Walidacja danych wejsciowych
        if not request_json:
            return ({"error": "Brak danych JSON"}, 400, headers)

        # Pobierz dane ucznia
        imie = request_json.get("imie", "Uczen")
        wiek = request_json.get("wiek", "")
        klasa = request_json.get("klasa", "")
        sekcje = request_json.get("sekcje", {})

        # Inicjalizacja Vertex AI
        # location="global": gemini-3.8-flash w Vertex nie istnieje w europe-west4 (404,
        # sprawdzone 2026-11-03). Swiadoma decyzja usera: model liczy poza regionem UE,
        # dane sa pod pseudonimami. Sama funkcja dalej stoi w europe-west4.
        vertexai.init(project="generatordokumentownauczyciela", location="global")

        # Budowanie opisu z sekcji
        opisy_lista = []
        nazwy_sekcji = {
            "powod": "Powod zgloszenia",
            "sytuacja": "Sytuacja domowa",
            "postepy": "Postepy w nauce",
            "sprawnosc": "Sprawnosc intelektualna",
            "stosunek": "Stosunek do nauki",
            "zachowanie": "Zachowanie w szkole",
            "zdrowie": "Stan zdrowia",
            "pomoc": "Pomoc szkoly",
            "inne": "Inne informacje",
        }

        for klucz, nazwa in nazwy_sekcji.items():
            if klucz in sekcje:
                sekcja_data = sekcje[klucz]
                opcje = sekcja_data.get("opcje", [])
                dodatkowe = sekcja_data.get("dodatkowe", "")

                if opcje or dodatkowe:
                    opis = f"\n{nazwa}:\n"
                    if opcje:
                        opis += "- " + "\n- ".join(opcje)
                    if dodatkowe:
                        opis += f"\nUwagi dodatkowe: {dodatkowe}"
                    opisy_lista.append(opis)

        opisy_str = "\n".join(opisy_lista)

        # Dane ucznia do promptu
        dane_ucznia = f"{imie}"
        if wiek:
            dane_ucznia += f", {wiek} lat"
        if klasa:
            dane_ucznia += f", klasa {klasa}"

        # PROMPT - 8 akapitow wg dokumentu poradni
        prompt = f"""Jestes doswiadczonym nauczycielem-wychowawca z 20-letnim stazem. Twoje serce bije dla dzieci.

Piszesz opinie do Poradni Psychologiczno-Pedagogicznej.

NAJWAZNIEJSZE ZASADY - "Prawda z Miloscia":
- Piszesz jako NAUCZYCIEL, nie psycholog (jezyk obserwacji, nie diagnozy)
- Widzisz CALE dziecko - nie tylko problemy, ale tez "delikatne echa" potencjalu
- Kazde zachowanie to informacja o potrzebie dziecka
- Trudnosci opisujesz z empatia, ale szczerze
- ZAWSZE wspominasz momenty gdy dziecko "swieci"
- Unikasz etykiet - opisujesz CO WIDZISZ
- Ton: ciepły, profesjonalny, pelen nadziei

Dane ucznia: {dane_ucznia}

Twoje obserwacje:
{opisy_str}

STRUKTURA (uzyj dokladnie tych naglowkow):

Powod zgloszenia / podac, jakie wystepuja trudnosci i od kiedy /:

1. Sytuacja domowa ucznia / warunki materialne, atmosfera zycia rodzinnego, postawa rodzicow wobec dziecka, metody wychowawcze rodzicow, stosunek rodzicow do szkoly i nauki dziecka itp. /:

2. Postepy ucznia w nauce / aktualne wyniki w nauce, przedmioty sprawiajace trudnosci, przedmioty, z ktorych uzyskuje dobre oceny, czy powtarzal klasy, ktore i dlaczego /:

3. Opinia nauczyciela o sprawnosci intelektualnej ucznia / myslenie, uwaga, pamiec, sposob wypowiadania sie /:

4. Stosunek ucznia do nauki, szkoly, niepowodzen szkolnych:

5. Zachowanie ucznia w szkole / cechy charakteru i usposobienie, uspolecznienie, stosunek do rowiesnikow, nauczycieli, wystepujace trudnosci wychowawcze /:

6. Stan zdrowia i wyglad dziecka:

7. Jakiej pomocy udzielala szkola w celu przezwyciezenia wystepujacych trudnosci:

8. Inne informacje:

Pod kazdym naglowkiem napisz 2-5 zdan jako nauczyciel-wychowawca ("Jako wychowawca obserwuje...", "Zauwazam, ze...").
Jezyk ciepły, konkretny, z przykladami. Balans trudnosci i mocnych stron.

ZAKAZ DOPISYWANIA FAKTOW (opinia trafia do poradni jako dokument):
- Piszesz WYLACZNIE na podstawie obserwacji podanych wyzej. Mozesz je ujac cieplo i rozwinac sens, ale NIE dodajesz nowych faktow: liczb, czestotliwosci, przedmiotow, metod pracy, zdarzen, cech wygladu, informacji o rodzinie.
- Jesli do danego naglowka nie podano zadnej obserwacji, wpisz pod nim tylko jedno zdanie: "Brak obserwacji - do uzupelnienia przez wychowawce."
- Nie dodawaj wstepu, podpisu, daty ani pol do wypelnienia w nawiasach - zacznij od pierwszego naglowka.

DLUGOSC: 500-700 slow"""

        # gemini-3.8-flash: 2.5-pro wycofany 2026-12-01; Flash trzyma zakaz dopisywania
        # faktow (test 3 uczniow: 4/4 pustych sekcji oznaczone vs 2/4 u Pro)
        model = GenerativeModel("gemini-3.8-flash")
        response = model.generate_content(prompt)

        return ({"success": True, "opinia": response.text}, 200, headers)

    except Exception as e:
        # Szczegoly zostaja w logach (Cloud Logging), do klienta idzie tylko
        # ogolny komunikat. str(e) w odpowiedzi HTTP wycieka sciezki, nazwe
        # projektu GCP i konfiguracje Vertex AI — endpoint jest publiczny.
        print(f"Blad: {e}")
        traceback.print_exc()
        return (
            {
                "success": False,
                "error": "Blad generowania opinii. Sprobuj ponownie lub zglos problem.",
            },
            500,
            headers,
        )
