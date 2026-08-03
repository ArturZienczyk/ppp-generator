"""End-to-end test wydruku formularza.

Bez wywoływania Cloud Run — wstrzykuje mockową opinię, wybiera różne poradnie,
zapisuje PDF i screenshoty żeby zobaczyć jak wydruk faktycznie wygląda.
"""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

MOCK_OPINIA = """Powód zgłoszenia / podać, jakie występują trudności i od kiedy /:
Mateusz został zgłoszony do Poradni Psychologiczno-Pedagogicznej celem diagnozy specjalistycznej dotyczącej trudności w uczeniu się, czytaniu, pisaniu. Uczeń popełnia liczne błędy ortograficzne, odwraca litery podczas pisania, podczas czytania przekręca wyrazy, ma trudność w skupieniu uwagi. Mateusz uczęszczał dwa lata na zajęcia korekcyjno-kompensacyjne w szkole. Pomimo pomocy pedagogicznej objawy nadal się utrzymują.

1. Sytuacja domowa ucznia:
Jako wychowawca mam stały i bardzo dobry kontakt z Rodzicami Mateusza, którzy są niezwykle zaangażowani w proces edukacyjny i wychowawczy syna. Jest to rodzina stabilna, zapewniająca Mateuszowi poczucie bezpieczeństwa i akceptacji. Z naszych rozmów wynika, że w domu panuje atmosfera wsparcia i zaufania, a rodzice aktywnie poszukują sposobów, by pomóc synowi, wykazując przy tym ogromną cierpliwość i zrozumienie dla jego trudności. Zawsze chętnie współpracują ze szkołą, regularnie uczestniczą w zebraniach i konsultacjach, z uwagą wsłuchując się w nasze spostrzeżenia i sugestie.

2. Postępy ucznia w nauce:
Obserwuję pewien regres w wynikach Mateusza w porównaniu z latami poprzednimi. Pamiętam go doskonale z klasy czwartej i piątej, kiedy z dumą odbierał świadectwo z wyróżnieniem – to pokazuje, jak wielki drzemie w nim potencjał. Obecnie jego oceny są dobre, jednak wymagają od niego coraz większego wsparcia, a on sam zdaje się tracić zapał do nauki. Najwięcej trudności sprawiają mu przedmioty wymagające operowania na pojęciach abstrakcyjnych i wielowątkowego myślenia np. język polski. Jednocześnie Mateusz niezmiennie "świeci" na lekcjach wychowania fizycznego. Jego koordynacja, sprawność i zaangażowanie w sport są wzorowe, co przynosi mu wiele satysfakcji i uznanie w oczach kolegów.

3. Opinia nauczyciela o sprawności intelektualnej ucznia:
Z moich obserwacji wynika, że Mateusz jest chłopcem inteligentnym, którego sprawność intelektualna mieści się w normie wiekowej. Wypowiada się rzadko, ale jego wypowiedzi są logiczne i na temat, posługuje się poprawną polszczyzną. Zauważam jednak, że ma trudności z dłuższą koncentracją uwagi na zadaniach, które uważa za mało interesujące lub zbyt trudne. Kiedy polecenie jest wieloetapowe, zdarza mu się gubić kolejne kroki. Potrzebuje jasnych, konkretnych instrukcji i częstego przypominania o celu zadania.

4. Stosunek ucznia do nauki, szkoły, niepowodzeń szkolnych:
Mateusz sprawia wrażenie, że lubi szkołę – przede wszystkim ze względu na relacje rówieśnicze, w których dobrze funkcjonuje. Ma stałą grupę przyjaciół, z którymi chętnie spędza przerwy. Zauważam jednak, że jest raczej biernym uczestnikiem lekcji; rzadko zgłasza się z własnej inicjatywy, choć zapytany, najczęściej potrafi udzielić odpowiedzi. W sytuacjach trudniejszych lub w obliczu niepowodzenia szkolnego, Mateusz nie prosi głośno o pomoc, a raczej wycofuje się.

5. Zachowanie ucznia w szkole:
Na co dzień Mateusz jest uczniem spokojnym, grzecznym i kulturalnym w stosunku do nauczycieli i pracowników szkoły. Jest lubiany w zespole klasowym, nie wchodzi w konflikty. Zdarzają mu się jednak momenty, gdy zdaje się "testować" granice, np. poprzez drobne rozmowy na lekcji, kiedy jego uwaga słabnie. Nie są to zachowania złośliwe, odbieram je raczej jako sygnał, że jego potrzeba ruchu lub stymulacji nie jest w danym momencie zaspokojona.

6. Stan zdrowia i wygląd dziecka:
Mateusz jest dzieckiem zawsze czystym i schludnie ubranym, co świadczy o dużej dbałości ze strony domu rodzinnego. Jest chłopcem o bardzo dobrej sprawności fizycznej, energicznym i silnym. Jego ogólny stan zdrowia, według mojej wiedzy oraz informacji od rodziców, jest dobry i nie budzi żadnych zastrzeżeń.

7. Jakiej pomocy udzielała szkoła w celu przezwyciężenia występujących trudności?:
Mateusz jest objęty pomocą psychologiczno-pedagogiczną na terenie szkoły. Jako wychowawca oraz pozostali nauczyciele staramy się dostosowywać formy pracy na lekcjach, dzieląc zadania na mniejsze partie i dając mu więcej czasu na ich wykonanie.

8. Inne informacje:
Warto wspomnieć, że poprzednia opinia Poradni wskazywała na fragmentaryczne deficyty rozwojowe, co może tłumaczyć obserwowane obecnie trudności w zderzeniu z rosnącymi wymaganiami edukacyjnymi. Jako wychowawca, który zna Mateusza od kilku lat, widzę w nim ogromny, choć chwilowo uśpiony potencjał. To dobry, wrażliwy chłopak, który potrzebuje odnaleźć swoją drogę do sukcesu. Wierzę, że przy odpowiednio ukierunkowanym wsparciu, odnajdzie on na nowo radość z nauki i poczucie sprawczości, które pozwolą mu w pełni rozwinąć skrzydła.
"""

OUT = Path("D:/Projects/ppp-generator/test_output")
OUT.mkdir(exist_ok=True)


async def test_szablon(page, klucz_szablonu, etykieta):
    # Wybierz poradnię
    await page.select_option("#szablon-poradni", klucz_szablonu)

    # Wstrzyknij mock opinię bezpośrednio (bez Cloud Run)
    await page.evaluate(f"""
        () => {{
            const opinia = {repr(MOCK_OPINIA)};
            wyswietlOpinie(opinia);
        }}
    """)

    # Element jest hidden poza @media print — czekaj na attached, nie visible
    await page.wait_for_selector(
        "#formularz-poradni .fp-tytul", state="attached", timeout=5000
    )

    # Sprawdź co wyrenderowało się w formularzu
    naglowki_count = await page.locator(".fp-sekcja-tytul").count()
    tresci_pelne = await page.evaluate("""
        () => Array.from(document.querySelectorAll('.fp-sekcja-tresc')).map(e => e.textContent.trim().length)
    """)
    cel = await page.locator(".fp-cel").text_content()
    adres = await page.locator(".fp-adres").text_content()

    # PDF do podglądu druku
    pdf_path = OUT / f"wydruk_{klucz_szablonu}.pdf"
    await page.emulate_media(media="print")
    await page.pdf(
        path=str(pdf_path),
        format="A4",
        margin={"top": "1.5cm", "bottom": "1.5cm", "left": "2cm", "right": "2cm"},
        print_background=True,
    )
    # Reset media — żeby dropdown był znowu klikalny dla kolejnego testu
    await page.emulate_media(media="screen")

    print(f"\n=== {etykieta} ({klucz_szablonu}) ===")
    print(f"  Cel: {cel.strip()[:90]}")
    print(f"  Adres: {adres.strip()[:90]}")
    print(f"  Sekcji wyrenderowanych: {naglowki_count}/9")
    print(f"  Długości treści (znaki): {tresci_pelne}")
    print(f"  PDF: {pdf_path}")


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("http://127.0.0.1:5000/", wait_until="networkidle")

        # Wypełnij dane testowe
        await page.fill("#imie", "Uczennica A")
        await page.fill("#wiek", "11")
        await page.fill("#klasa", "5a")

        # Test 3 różnych szablonów (rejonowa, inna rejonowa, specjalistyczna)
        await test_szablon(page, "lodz_pp4", "Poradnia nr 4 (domyślna)")
        await test_szablon(page, "lodz_pp2", "Poradnia nr 2 (Bałuty)")
        await test_szablon(page, "lodz_pppdm", "Specjalistyczna dla Młodzieży")

        await browser.close()
    print("\nGotowe — sprawdź PDF-y w D:/Projects/ppp-generator/test_output/")


asyncio.run(main())
