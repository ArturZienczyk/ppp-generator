import vertexai
from vertexai.generative_models import GenerativeModel
import functions_framework

@functions_framework.http
def generate_ppp_opinion(request):
    # CORS headers
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)
    
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    
    try:
        request_json = request.get_json(silent=True)
        if not request_json or 'dane_ucznia' not in request_json or 'opisy' not in request_json:
            return ({'error': 'Wymagane pola: "dane_ucznia" i "opisy" (lista).'}, 400, headers)
        
        dane_ucznia = request_json['dane_ucznia']
        opisy = request_json['opisy']
        
        vertexai.init(
            project='generatordokumentownauczyciela',
            location='us-central1'      
        )
        
        opisy_str = "\n- " + "\n- ".join(opisy)
        
        prompt = f"""Jesteś doświadczonym nauczycielem-wychowawcą z 20-letnim stażem. Twoje serce bije dla dzieci.

Piszesz opinię do Poradni Psychologiczno-Pedagogicznej.

NAJWAŻNIEJSZE ZASADY - "Prawda z Miłością":
- Piszesz jako NAUCZYCIEL, nie psycholog (język obserwacji, nie diagnozy)
- Widzisz CAŁE dziecko - nie tylko problemy, ale też "delikatne echa" potencjału
- Każde zachowanie to informacja o potrzebie dziecka
- Trudności opisujesz z empatią, ale szczerze
- ZAWSZE wspominasz momenty gdy dziecko "świeci"
- Unikasz etykiet - opisujesz CO WIDZISZ
- Ton: ciepły, profesjonalny, pełen nadziei

Dane ucznia: {dane_ucznia}

Twoje obserwacje:
{opisy_str}

STRUKTURA (użyj dokładnie tych nagłówków):

Powód zgłoszenia / podać, jakie występują trudności i od kiedy /:

1. Sytuacja domowa ucznia / warunki materialne, atmosfera życia rodzinnego, postawa rodziców wobec dziecka, metody wychowawcze rodziców, stosunek rodziców do szkoły i nauki dziecka itp. /:

2. Postępy ucznia w nauce / aktualne wyniki w nauce, przedmioty sprawiające trudności, przedmioty, z których uzyskuje dobre oceny, czy powtarzał klasy, które i dlaczego /:

3. Opinia nauczyciela o sprawności intelektualnej ucznia / myślenie, uwaga, pamięć, sposób wypowiadania się /:

4. Stosunek ucznia do nauki, szkoły, niepowodzeń szkolnych:

5. Zachowanie ucznia w szkole / cechy charakteru i usposobienie, uspołecznienie, stosunek do rówieśników, nauczycieli, występujące trudności wychowawcze /:

6. Stan zdrowia i wygląd dziecka:

7. Jakiej pomocy udzielała szkoła w celu przezwyciężenia występujących trudności:

8. Inne informacje:

Pod każdym nagłówkiem napisz 2-5 zdań jako nauczyciel-wychowawca ("Jako wychowawca obserwuję...", "Zauważam, że..."). 
Język ciepły, konkretny, z przykładami. Balans trudności i mocnych stron.

DŁUGOŚĆ: 500-700 słów"""
        
        model = GenerativeModel('gemini-2.5-pro')
        response = model.generate_content(prompt)
        
        return ({
            'success': True,
            'opinia': response.text
        }, 200, headers)
        
    except Exception as e:
        print(f"Błąd: {e}")
        return ({
            'success': False,
            'error': str(e)
        }, 500, headers)
        