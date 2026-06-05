// ==============================================
// SZABLONY PORADNI (do wydruku formularza)
// ==============================================

// Wspólny zestaw pól osobowych i sekcji (standardowy druk miejski Łodzi)
const POLA_OSOBOWE_STD = [
    'Imię i nazwisko ucznia',
    'Adres zamieszkania',
    'Data i miejsce urodzenia',
    'Imiona i nazwiska rodziców lub opiekunów',
    'Szkoła Podstawowa nr ___ kl. ___'
];

// Liczba linii (kratek) per sekcja zgodnie z oryginalnym papierowym drukiem PP nr 4
const SEKCJE_STD = [
    { id: 'powod', linie: 6, naglowek: 'Powód zgłoszenia  / podać, jakie występują trudności i od kiedy /' },
    { id: 'sek1', linie: 5, naglowek: '1. Sytuacja domowa ucznia / warunki materialne, atmosfera życia rodzinnego, postawa rodziców wobec dziecka, metody wychowawcze rodziców, stosunek rodziców do szkoły i nauki dziecka itp.' },
    { id: 'sek2', linie: 6, naglowek: '2. Postępy ucznia w nauce / aktualne wyniki w nauce, przedmioty sprawiające trudności, przedmioty, z których uzyskuje dobre oceny, czy powtarzał klasy, które i dlaczego? /' },
    { id: 'sek3', linie: 9, naglowek: '3. Opinia nauczyciela o sprawności intelektualnej ucznia / myślenie, uwaga, pamięć, sposób wypowiadania się /' },
    { id: 'sek4', linie: 8, naglowek: '4. Stosunek ucznia do nauki, szkoły, niepowodzeń szkolnych', breakBefore: true },
    { id: 'sek5', linie: 10, naglowek: '5. Zachowanie ucznia w szkole / cechy charakteru i usposobienie, uspołecznienie, stosunek do rówieśników, nauczycieli, występujące trudności wychowawcze /' },
    { id: 'sek6', linie: 7, naglowek: '6. Stan zdrowia i wygląd dziecka' },
    { id: 'sek7', linie: 8, naglowek: '7. Jakiej pomocy udzielała szkoła w celu przezwyciężenia występujących trudności?' },
    { id: 'sek8', linie: 12, naglowek: '8. Inne informacje' }
];

const PODPISY_STD = ['PODPIS DYREKTORA', 'PODPIS WYCHOWAWCY'];

// Dane poradni zweryfikowane: D:/Projects/research-notes/poradnie-pp-lodz-2026-05-11_iter.json
// (haiku-researcher-grounded + iter_loop, semantic_failures 0%, 2026-05-11)
const szablonyPoradni = {
    'lodz_pp1': {
        nazwa: 'Poradnia nr 1 — Łódź',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA KL. IV – VIII Szkoły Podstawowej',
        celInstytucji: 'Do Poradni Psychologiczno – Pedagogicznej nr 1',
        adresPoradni: 'ul. Hipoteczna 3/5, 91-335 Łódź',
        telefonPoradni: 'tel. 690 418 676; 42 651 49 72  •  kontakt@ppp1.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_pp2': {
        nazwa: 'Poradnia nr 2 — Łódź (Bałuty)',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA KL. IV – VIII Szkoły Podstawowej',
        celInstytucji: 'Do Poradni Psychologiczno – Pedagogicznej nr 2',
        adresPoradni: 'ul. Motylowa 3, 91-362 Łódź',
        telefonPoradni: 'tel. 42 659 15 81  •  kontakt@ppp2.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_pp3': {
        nazwa: 'Poradnia nr 3 — Łódź (Śródmieście)',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA KL. IV – VIII Szkoły Podstawowej',
        celInstytucji: 'Do Poradni Psychologiczno – Pedagogicznej nr 3',
        adresPoradni: 'ul. Dowborczyków 5, 90-019 Łódź',
        telefonPoradni: 'tel. 42 676 73 05  •  fax 42 676 73 04  •  kontakt@ppp3.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_pp4': {
        nazwa: 'Poradnia nr 4 — Łódź (Widzew)',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA KL. IV – VIII Szkoły Podstawowej',
        celInstytucji: 'Do Poradni Psychologiczno – Pedagogicznej nr 4',
        adresPoradni: 'al. Piłsudskiego 101, 92-332 Łódź',
        telefonPoradni: 'tel/fax 42 674 45 88; 42 674 59 73  •  kom. 530 622 874  •  kontakt@ppp4.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_pp5': {
        nazwa: 'Poradnia nr 5 — Łódź (Polesie)',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA KL. IV – VIII Szkoły Podstawowej',
        celInstytucji: 'Do Poradni Psychologiczno – Pedagogicznej nr 5',
        adresPoradni: 'ul. Ksawerego Praussa 2, 94-203 Łódź',
        telefonPoradni: 'tel. 42 637 16 08  •  sekretariat@ppp5.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_pp6': {
        nazwa: 'Poradnia nr 6 — Łódź (Górna)',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA KL. IV – VIII Szkoły Podstawowej',
        celInstytucji: 'Do Poradni Psychologiczno – Pedagogicznej nr 6',
        adresPoradni: 'ul. Rzgowska 25, 93-008 Łódź',
        telefonPoradni: 'tel. 42 681 92 82  •  kontakt@ppp6.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_spwrit': {
        nazwa: 'Specjalistyczna Poradnia Wspierania Rozwoju i Terapii — Łódź',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE DZIECKA / UCZNIA',
        celInstytucji: 'Do Specjalistycznej Poradni Psychologiczno – Pedagogicznej Wspierania Rozwoju i Terapii',
        adresPoradni: 'ul. Hipoteczna 3/5, 91-335 Łódź',
        telefonPoradni: 'tel. 42 653 76 75  •  kontakt@spwrit.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_pppdm': {
        nazwa: 'Specjalistyczna Poradnia dla Młodzieży — Łódź',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA SZKOŁY PONADPODSTAWOWEJ',
        celInstytucji: 'Do Specjalistycznej Poradni Psychologiczno – Pedagogicznej dla Młodzieży',
        adresPoradni: 'al. ks. kard. S. Wyszyńskiego 86, 94-050 Łódź',
        telefonPoradni: 'tel. 42 688 16 68; 42 688 15 39  •  kontakt@pppdm.edu.lodz.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    },
    'lodz_spppdz': {
        nazwa: 'Specjalistyczna Poradnia Doradztwa Zawodowego — Łódź',
        miasto: 'Łódź',
        tytul: 'ZGŁOSZENIE UCZNIA — DORADZTWO ZAWODOWE',
        celInstytucji: 'Do Specjalistycznej Poradni Psychologiczno – Pedagogicznej Doradztwa Zawodowego i dla Dzieci z Wadami Rozwojowymi',
        adresPoradni: 'al. ks. kard. S. Wyszyńskiego 86, 94-050 Łódź',
        telefonPoradni: 'tel. 42 688 20 70; 42 688 21 62  •  sekretariat@spppdz.elodz.edu.pl',
        polaOsobowe: POLA_OSOBOWE_STD, sekcje: SEKCJE_STD, podpisy: PODPISY_STD
    }
};

let aktywnySzablon = 'lodz_pp4';

// ==============================================
// OBSŁUGA TOGGLE WIDOKÓW
// Desktop: Sekcje vs Kompakt
// Mobile: Wszystkie rozwinięte vs Accordion (jedna na raz)
// ==============================================

function inicjalizujToggle() {
    const toggleSwitch = document.getElementById('viewToggle');
    const sekcjeContainer = document.getElementById('sekcje-container');
    const toggleOptions = document.querySelectorAll('.toggle-option');

    if (!toggleSwitch) return;

    // Aktualizuj etykiety toggle w zależności od trybu
    aktualizujEtykietyToggle();

    toggleSwitch.addEventListener('click', (e) => {
        const clickedOption = e.target.closest('.toggle-option');
        if (!clickedOption) return;

        const view = clickedOption.dataset.view;

        // Przełącz aktywną opcję
        toggleOptions.forEach(opt => opt.classList.remove('active'));
        clickedOption.classList.add('active');

        if (isTouchDevice()) {
            // MOBILE: Przełącznik accordion
            if (view === 'compact') {
                accordionMode = true;
                sekcjeContainer.classList.add('accordion-mode');
                zwinWszystkieSekcje();
            } else {
                accordionMode = false;
                sekcjeContainer.classList.remove('accordion-mode');
                rozwinWszystkieSekcje();
            }
        } else {
            // DESKTOP: Standardowy przełącznik Sekcje/Kompakt
            if (view === 'compact') {
                toggleSwitch.classList.add('compact-mode');
                sekcjeContainer.classList.add('compact-mode');
            } else {
                toggleSwitch.classList.remove('compact-mode');
                sekcjeContainer.classList.remove('compact-mode');
            }
        }

        // Po zmianie widoku, odśwież interakcje drag&drop/click
        // (bo layout kolumn się zmienił: 3 obok → pionowo lub odwrotnie)
        setTimeout(() => {
            odswiezInterakcje();
        }, 100); // Czekamy aż CSS się zastosuje
    });
}

// Aktualizuj etykiety toggle w zależności od desktop/mobile
function aktualizujEtykietyToggle() {
    const option1 = document.querySelector('[data-view="sections"]');
    const option2 = document.querySelector('[data-view="compact"]');

    if (isTouchDevice()) {
        // Mobile: Wszystkie / Jedna na raz
        option1.innerHTML = '<div class="toggle-icon">📂</div><div>Wszystkie</div>';
        option2.innerHTML = '<div class="toggle-icon">📋</div><div>Jedna na raz</div>';
    } else {
        // Desktop: Sekcje / Kompakt
        option1.innerHTML = '<div class="toggle-icon">📚</div><div>Sekcje</div>';
        option2.innerHTML = '<div class="toggle-icon">📊</div><div>Kompakt</div>';
    }
}

// ==============================================
// DANE APLIKACJI
// ==============================================

// Dane dla wszystkich sekcji (opcje do przeciągania)
const daneSekcji = {
    "powod": {
        tytul: "Powód zgłoszenia",
        opis: "podać, jakie występują trudności i od kiedy",
        trudnosci: [
            "Trudności z koncentracją uwagi podczas lekcji",
            "Problemy z zapamiętywaniem materiału",
            "Trudności w czytaniu ze zrozumieniem",
            "Problemy z pisaniem (tempo, czytelność)",
            "Trudności w liczeniu i rozumowaniu matematycznym",
            "Konflikty z rówieśnikami",
            "Wycofanie społeczne, izolacja",
            "Impulsywność, trudności z samoregulacją",
            "Nadmierna nieśmiałość, lęk przed wypowiadaniem się",
            "Trudności w skupieniu przy dłuższych zadaniach",
            "Problemy z organizacją pracy",
            "Podejrzenie opóźnienia rozwoju mowy",
            "Trudności z samodzielnym wykonywaniem zadań"
        ],
        neutralne: [
            "Zmienny poziom koncentracji w zależności od przedmiotu",
            "Przeciętne wyniki w nauce",
            "Czasami potrzebuje dodatkowego czasu na zadania",
            "Funkcjonuje w normie wiekowej, ale rodzice martwią się o rozwój",
            "Trudności okresowe, związane z sytuacją rodzinną",
            "Skierowanie na wniosek rodziców",
            "Rodzice proszą o ocenę gotowości szkolnej",
            "Kontrola po wcześniejszej diagnozie"
        ],
        mocne: [
            "Bardzo zaangażowany gdy temat go interesuje",
            "Kreatywny w rozwiązywaniu problemów",
            "Empatyczny, wrażliwy na potrzeby innych",
            "Wytrwały mimo trudności",
            "Ma pasje i zainteresowania (sport, sztuka, przyroda...)",
            "Dobry kontakt z dorosłymi",
            "Chętny do pomocy innym"
        ],
        poleDodatkowe: "Od kiedy obserwujesz te trudności?"
    },
    "sytuacja": {
        tytul: "1. Sytuacja domowa ucznia",
        opis: "warunki materialne, atmosfera życia rodzinnego, postawa rodziców wobec dziecka, metody wychowawcze rodziców, stosunek rodziców do szkoły i nauki dziecka itp.",
        trudnosci: [
            "Trudna sytuacja materialna rodziny",
            "Napięta atmosfera w domu, konflikty",
            "Brak wsparcia rodziców w nauce",
            "Rodzice nadmiernie wymagający, presja na dziecko",
            "Zaniedbania wychowawcze",
            "Rodzice rzadko kontaktują się ze szkołą",
            "Dziecko doświadcza przemocy domowej (sygnały)",
            "Rodzice w separacji/rozwodzie"
        ],
        neutralne: [
            "Przeciętne warunki materialne",
            "Standardowa atmosfera rodzinna",
            "Rodzice pracują, dziecko pod opieką dziadków",
            "Rodzice zainteresowani, ale mają ograniczone możliwości wsparcia",
            "Kontakt z rodzicami poprawny, choć rzadki"
        ],
        mocne: [
            "Stabilna, wspierająca rodzina",
            "Bardzo dobra współpraca z rodzicami",
            "Rodzice aktywnie wspierają rozwój dziecka",
            "Ciepła, akceptująca atmosfera w domu",
            "Rodzice otwarci na sugestie szkoły",
            "Dziecko ma obowiązki domowe, wywiązuje się z nich",
            "Dobre relacje z rodzeństwem, wspiera się nawzajem",
            "Rodzice doceniają osiągnięcia dziecka"
        ],
        poleDodatkowe: "Dodatkowe uwagi o sytuacji domowej:"
    },
    "postepy": {
        tytul: "2. Postępy ucznia w nauce",
        opis: "aktualne wyniki w nauce, przedmioty sprawiające trudności, przedmioty, z których uzyskuje dobre oceny, czy powtarzał klasy, które i dlaczego",
        trudnosci: [
            "Wyniki znacznie poniżej możliwości",
            "Powtarzał klasę (wskazać którą)",
            "Duże trudności z matematyką",
            "Duże trudności z językiem polskim (czytanie/pisanie)",
            "Trudności z językami obcymi",
            "Nie odrabia prac domowych",
            "Systematyczny spadek wyników"
        ],
        neutralne: [
            "Wyniki przeciętne, zgodne z wiekiem",
            "Zróżnicowane oceny w zależności od przedmiotu",
            "Potrzebuje więcej czasu na opanowanie materiału",
            "Wyniki zmienne, zależne od motywacji"
        ],
        mocne: [
            "Bardzo dobre wyniki z przedmiotów ścisłych",
            "Bardzo dobre wyniki z przedmiotów humanistycznych",
            "Utalentowany plastycznie/muzycznie",
            "Świetnie radzi sobie na wychowaniu fizycznym",
            "Dociekliwy, zadaje dużo pytań",
            "Sumiennie odrabia zadania domowe"
        ],
        poleDodatkowe: "Dodatkowe uwagi o postępach w nauce:"
    },
    "sprawnosc": {
        tytul: "3. Opinia nauczyciela o sprawności intelektualnej ucznia",
        opis: "myślenie, uwaga, pamięć, sposób wypowiadania się",
        trudnosci: [
            "Trudności z koncentracją uwagi (krótki czas skupienia)",
            "Słaba pamięć krótkotrwała",
            "Wolne tempo przetwarzania informacji",
            "Trudności w rozumowaniu abstrakcyjnym",
            "Problemy z formułowaniem wypowiedzi",
            "Ubogi zasób słownictwa",
            "Trudności w wyciąganiu wniosków"
        ],
        neutralne: [
            "Sprawność intelektualna w normie wiekowej",
            "Pamięć selektywna (lepiej pamięta to co go interesuje)",
            "Tempo pracy przeciętne",
            "Wypowiada się poprawnie, choć niewiele"
        ],
        mocne: [
            "Bardzo dobra pamięć",
            "Szybko przyswaja nowe informacje",
            "Logiczne myślenie, dostrzega związki przyczynowo-skutkowe",
            "Bogaty zasób słownictwa",
            "Sprawnie formułuje myśli",
            "Zdolności analityczne powyżej wieku"
        ],
        poleDodatkowe: "Dodatkowe obserwacje dotyczące funkcji poznawczych:"
    },
    "stosunek": {
        tytul: "4. Stosunek ucznia do nauki, szkoły, niepowodzeń szkolnych",
        opis: "",
        trudnosci: [
            "Niechętny wobec nauki",
            "Unika zadań sprawiających trudność",
            "Bardzo źle znosi porażki (płacz, złość, rezygnacja)",
            "Nie wierzy w swoje możliwości",
            "Często nieobecny, wagaruje",
            "Negatywny stosunek do szkoły"
        ],
        neutralne: [
            "Stosunek do nauki zmienny, zależy od przedmiotu",
            "Przychodzi do szkoły bez entuzjazmu, ale bez oporu",
            "Porażki przyjmuje z rezygnacją",
            "Nie wykazuje inicjatywy, ale wykonuje polecenia",
            "Potrzebuje zewnętrznej motywacji (nagrody, pochwały)"
        ],
        mocne: [
            "Chętnie uczestniczy w lekcjach",
            "Lubi szkołę, ma tu przyjaciół",
            "Porażki traktuje jako motywację do pracy",
            "Podejmuje wyzwania",
            "Aktywny w zajęciach pozalekcyjnych",
            "Wierzy w siebie, jest optymistyczny",
            "Ma ulubiony przedmiot, bardzo się angażuje",
            "Motywuje go ciekawość, chęć poznania"
        ],
        poleDodatkowe: "Dodatkowe uwagi o stosunku do nauki:"
    },
    "zachowanie": {
        tytul: "5. Zachowanie ucznia w szkole",
        opis: "cechy charakteru i usposobienie, uspołecznienie, stosunek do rówieśników, nauczycieli, występujące trudności wychowawcze",
        trudnosci: [
            "Agresywny wobec rówieśników (słownie/fizycznie)",
            "Prowokuje konflikty",
            "Nie respektuje zasad, autorytetów",
            "Wulgarnie się wyraża",
            "Kłamie, manipuluje",
            "Izolowany przez grupę, odrzucany",
            "Bardzo nieśmiały, lękliwy",
            "Płaczliwy, emocjonalnie niestabilny",
            "Źle reaguje na krytykę - zamyka się lub reaguje agresją"
        ],
        neutralne: [
            "Zachowanie poprawne, bez wyraźnych problemów",
            "Ma 2-3 kolegów, nie szuka szerszych kontaktów",
            "Czasem trudności z podporządkowaniem się zasadom",
            "Reaguje emocjonalnie w trudnych sytuacjach",
            "Potrzebuje wsparcia dorosłego w rozwiązywaniu konfliktów"
        ],
        mocne: [
            "Życzliwy, pomocny wobec innych",
            "Lubiany przez rówieśników",
            "Ma wielu przyjaciół",
            "Potrafi współpracować w grupie",
            "Empatyczny, wyczulony na krzywdę innych",
            "Dobry kontakt z nauczycielami",
            "Mediator w konfliktach klasowych",
            "Wesołe usposobienie, poczucie humoru",
            "Potrafi negocjować, rozwiązywać konflikty słownie",
            "Dzieli się, pomaga słabszym",
            "Dobrze reaguje na pochwały",
            "Samodzielny w codziennych czynnościach"
        ],
        poleDodatkowe: "Dodatkowe uwagi o zachowaniu:"
    },
    "zdrowie": {
        tytul: "6. Stan zdrowia i wygląd dziecka",
        opis: "",
        trudnosci: [
            "Częste infekcje, nieobecności z powodu choroby",
            "Przewlekłe schorzenia (astma, alergie...)",
            "Nosi okulary/aparat słuchowy - wymaga dostosowań",
            "Problemy z motoryką małą (pismo)",
            "Problemy z koordynacją ruchową",
            "Zaniedbany wygląd, higiena",
            "Wyraźnie zmęczony, apatyczny",
            "Sygnały problemów somatycznych (bóle głowy, brzucha...)"
        ],
        neutralne: [
            "Stan zdrowia dobry, bez istotnych problemów",
            "Przeciętna sprawność fizyczna",
            "Wygląd schludny, zadbany"
        ],
        mocne: [
            "Bardzo dobra kondycja fizyczna",
            "Rzadko choruje",
            "Energiczny, pełen wigoru",
            "Zadbany, schludny"
        ],
        poleDodatkowe: "Dodatkowe uwagi o zdrowiu:"
    },
    "pomoc": {
        tytul: "7. Jakiej pomocy udzielała szkoła w celu przezwyciężenia występujących trudności",
        opis: "",
        trudnosci: [
            "Rozmowy wychowawcze - bez efektu",
            "Zajęcia wyrównawcze - niechętnie uczestniczy",
            "Kontakt z pedagogiem szkolnym - rodzice nie współpracują",
            "Indywidualny tok nauki - nie przyniósł poprawy"
        ],
        neutralne: [
            "Objęty pomocą psychologiczno-pedagogiczną w szkole",
            "Uczestniczy w zajęciach wyrównawczych",
            "Dostosowania wymagań edukacyjnych",
            "Spotkania z pedagogiem szkolnym"
        ],
        mocne: [
            "Zajęcia rozwijające zainteresowania - chętnie uczestniczy",
            "Sprawdza się jako dyżurny klasowy, wolontariusz",
            "Pozytywnie reaguje na indywidualne rozmowy",
            "Dobrze funkcjonuje w małych grupach",
            "Pomaga system motywacyjny (pochwały, nagrody)"
        ],
        poleDodatkowe: "Dodatkowe informacje o udzielanej pomocy:"
    },
    "inne": {
        tytul: "8. Inne informacje",
        opis: "",
        trudnosci: [
            "Podejrzenie zaburzeń ze spektrum autyzmu",
            "Podejrzenie ADHD",
            "Podejrzenie dysleksji rozwojowej",
            "Podejrzenie dyskalkulii",
            "Problemy emocjonalne wymagające konsultacji",
            "Doświadczył traumy (żałoba, wypadek...)",
            "Problemy rodzinne wpływają na funkcjonowanie"
        ],
        neutralne: [
            "Zmiana szkoły w tym roku szkolnym",
            "Nowy uczeń, trudności adaptacyjne",
            "W rodzinie problemy finansowe",
            "Rodzeństwo też ma trudności w nauce"
        ],
        mocne: [
            "Wyraźny postęp w ostatnich miesiącach",
            "Rodzice bardzo zaangażowani we współpracę",
            "Ma mentora/starszego kolegę wspierającego",
            "Uczestniczy w terapii prywatnej - widoczne efekty"
        ],
        poleDodatkowe: "Inne istotne informacje:"
    }
};

// Podpowiedzi rozwojowe zależne od wieku
const podpowiedziWiekowe = {
    6: "Dziecko 6-letnie przechodzi wielką zmianę - rozpoczęcie edukacji szkolnej. Naturalne są trudności z koncentracją (10-15 minut), płaczliwość, tęsknota za rodzicem.",
    7: "Wiek 7 lat to czas nauki czytania i pisania - ogromny wysiłek poznawczy. Tempo rozwoju bardzo zróżnicowane. Niektóre dzieci potrzebują więcej czasu.",
    8: "8-latki zazwyczaj stabilizują umiejętności szkolne. Pojawia się większa świadomość społeczna - pierwsze 'paczki' przyjacielskie, ale też pierwsze wykluczenia.",
    9: "Dziecko 9-letnie rozwija myślenie abstrakcyjne. Może być bardziej krytyczne wobec siebie i innych. Wrażliwe na porównania z rówieśnikami.",
    10: "Wiek 10 lat to często 'złoty okres' - względna stabilność emocjonalna przed burzą pokwitania. Dzieci zazwyczaj chętnie współpracują z dorosłymi.",
    11: "11-latki często wchodzą w fazę przedpokwitaniową. Wahania nastroju, drażliwość, wycofanie lub nadmierna gadatliwość mogą być normą.",
    12: "Wiek 12 lat to pełnia zmian hormonalnych. Koncentracja może spadać, emocje są intensywne. Grupa rówieśnicza staje się ważniejsza od dorosłych.",
    13: "13-latki przeżywają intensywny okres dojrzewania. Normalne są: bunt, poszukiwanie tożsamości, wahania samooceny, zmienność zachowania.",
    14: "14-latki często 'testują granice'. Mogą być impulsywne, ryzykowne zachowania. To wiek wielkiej wrażliwości przy pozornej 'twardości'.",
    15: "15-latki rozwijają myślenie hipotetyczne, filozofują. Mogą być bardzo krytyczne wobec świata dorosłych. Ważna jest autonomia.",
    16: "16-latki często stabilizują się emocjonalnie po burzliwym okresie. Myślą o przyszłości, ale wciąż potrzebują wsparcia w trudnych decyzjach.",
    17: "17-latki stoją u progu dorosłości. Mogą oscylować między dojrzałością a dziecięcością. Ważne by nie traktować ich problemów jako 'błahych'.",
    18: "18-latki formalnie dorośli, ale mózg rozwija się do ok. 25 roku życia. Wciąż mogą potrzebować wsparcia w regulacji emocji i planowaniu."
};

// Stan aplikacji
let wybraneOpcje = {};
let draggedElement = null;
let accordionMode = false; // Tryb accordion dla mobile

// Wykrywanie urządzenia dotykowego lub małego ekranu
const isTouchDevice = () => {
    // Sprawdź fizyczne właściwości touch
    const hasTouch = (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));

    // Sprawdź szerokość ekranu (dla symulatorów DevTools)
    const isSmallScreen = window.innerWidth <= 768;

    return hasTouch || isSmallScreen;
};

// Wykrywanie czy kolumny są poziomo (3 obok siebie) czy pionowo (jedna nad drugą)
const czyKolumnyPoziomo = () => {
    const kolumny = document.querySelector('.kolumny');
    if (!kolumny) return false;

    const style = window.getComputedStyle(kolumny);
    const gridColumns = style.gridTemplateColumns;

    // Sprawdź ile kolumn w gridzie (np. "1fr 1fr 1fr" = 3 kolumny, "1fr" = 1 kolumna)
    const iloscKolumn = gridColumns.split(' ').filter(val => val.trim() !== '').length;

    return iloscKolumn === 3; // true = kolumny poziomo (drag&drop), false = pionowo (click)
};

// ==============================================
// INICJALIZACJA
// ==============================================

// Funkcja aktualizująca tryb touch
function aktualizujTrybTouch() {
    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.remove('touch-device');
    }
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    inicjalizujToggle();
    inicjalizujSekcje();
    podlaczNasluchiwaczeWiek();
    podlaczPrzyciskGeneruj();
    podlaczDropdownSzablonu();

    // Dodaj klasę do body dla urządzeń dotykowych
    aktualizujTrybTouch();

    // Nasłuchuj na zmianę rozmiaru okna (dla symulatorów DevTools i resize)
    let resizeTimer;
    let poprzedniaTouchDetection = isTouchDevice();
    let poprzedniaLayoutDetection = false; // będzie ustawione po inicjalizacji

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const bylTouchDevice = poprzedniaTouchDetection;
            const jestTouchDevice = isTouchDevice();

            // Sprawdź czy zmienił się layout kolumn (3 obok → pionowo lub odwrotnie)
            const bylLayout = poprzedniaLayoutDetection;
            const jestLayout = czyKolumnyPoziomo();

            const zmianaTrybuTouch = (bylTouchDevice !== jestTouchDevice);
            const zmianaLayoutu = (bylLayout !== jestLayout);

            if (zmianaTrybuTouch) {
                // Zmiana touch device - przeładuj wszystko
                aktualizujTrybTouch();
                aktualizujEtykietyToggle();
                document.getElementById('sekcje-container').innerHTML = '';
                inicjalizujSekcje();
                poprzedniaTouchDetection = jestTouchDevice;
                poprzedniaLayoutDetection = czyKolumnyPoziomo();
            } else if (zmianaLayoutu) {
                // Zmiana layoutu kolumn - odśwież tylko interakcje
                odswiezInterakcje();
                poprzedniaLayoutDetection = jestLayout;
                console.log(`🔄 Layout zmieniony: Kolumny poziomo=${jestLayout}`);
            }
        }, 250);
    });

    // Zapisz początkowy stan layoutu
    setTimeout(() => {
        poprzedniaLayoutDetection = czyKolumnyPoziomo();
    }, 300);
});

// ==============================================
// TWORZENIE SEKCJI
// ==============================================

// Tworzenie sekcji z drag & drop
function inicjalizujSekcje() {
    const container = document.getElementById('sekcje-container');
    
    Object.keys(daneSekcji).forEach(klucz => {
        const dane = daneSekcji[klucz];
        wybraneOpcje[klucz] = { opcje: [], dodatkowe: '' };
        
        const sekcjaDiv = document.createElement('div');
        sekcjaDiv.className = 'sekcja';
        sekcjaDiv.dataset.sekcja = klucz;
        sekcjaDiv.innerHTML = `
            <h3 class="sekcja-naglowek">
                ${dane.tytul}
                <span class="accordion-icon">▼</span>
            </h3>
            <div class="sekcja-tresc">
            ${dane.opis ? `<p style="color: #666; margin-bottom: 20px; font-style: italic;">/${dane.opis}/</p>` : ''}
            
            <div class="kolumny">
                <div class="kolumna trudnosci">
                    <h4>🔴 Trudności</h4>
                    <div class="opcje-lista" data-typ="trudnosci" data-sekcja="${klucz}">
                        ${dane.trudnosci.map(opcja => `
                            <div class="opcja" draggable="true" data-tekst="${opcja}">
                                ${opcja}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="kolumna neutralne">
                    <h4>⚪ Neutralne</h4>
                    <div class="opcje-lista" data-typ="neutralne" data-sekcja="${klucz}">
                        ${dane.neutralne.map(opcja => `
                            <div class="opcja" draggable="true" data-tekst="${opcja}">
                                ${opcja}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="kolumna mocne">
                    <h4>🟢 Mocne strony</h4>
                    <div class="opcje-lista" data-typ="mocne" data-sekcja="${klucz}">
                        ${dane.mocne.map(opcja => `
                            <div class="opcja" draggable="true" data-tekst="${opcja}">
                                ${opcja}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="obszar-zrzutu" data-sekcja="${klucz}">
                <h4 class="obszar-naglowek">
                    <span class="drag-drop-text">⬇️ Przeciągnij tutaj wybrane obserwacje:</span>
                    <span class="click-text">✓ Wybrane obserwacje (kliknij opcję powyżej):</span>
                </h4>
                <div class="wybrane-opcje" id="wybrane-${klucz}"></div>
            </div>
            
            ${dane.poleDodatkowe ? `
                <div class="pole-dodatkowe">
                    <label>${dane.poleDodatkowe}</label>
                    <textarea id="dodatkowe-${klucz}" placeholder="Możesz dodać własne uwagi..."></textarea>
                </div>
            ` : ''}
            </div>
        `;
        
        container.appendChild(sekcjaDiv);
    });

    podlaczDragAndDrop();
    podlaczAccordion();
    aktualizujTrybInterakcji();
}

// Aktualizuj tryb interakcji (drag&drop vs click) i wyświetlane teksty
function aktualizujTrybInterakcji() {
    const kolumnyPoziomo = czyKolumnyPoziomo();

    if (kolumnyPoziomo) {
        document.body.classList.add('drag-drop-mode');
        document.body.classList.remove('click-only-mode');
    } else {
        document.body.classList.remove('drag-drop-mode');
        document.body.classList.add('click-only-mode');
    }
}

// ==============================================
// ACCORDION - ZWIJANIE/ROZWIJANIE SEKCJI
// ==============================================

function podlaczAccordion() {
    const sekcje = document.querySelectorAll('.sekcja');

    sekcje.forEach(sekcja => {
        const naglowek = sekcja.querySelector('.sekcja-naglowek');

        naglowek.addEventListener('click', () => {
            // Tylko na mobile i w trybie accordion
            if (!isTouchDevice() || !accordionMode) return;

            const jestZwinieta = sekcja.classList.contains('collapsed');

            if (jestZwinieta) {
                // Rozwiń tę sekcję
                sekcja.classList.remove('collapsed');
            } else {
                // Zwiń tę sekcję
                sekcja.classList.add('collapsed');
            }
        });
    });
}

function zwinWszystkieSekcje() {
    const sekcje = document.querySelectorAll('.sekcja');
    sekcje.forEach((sekcja, index) => {
        // Pierwsza sekcja rozwinięta, reszta zwinięte
        if (index === 0) {
            sekcja.classList.remove('collapsed');
        } else {
            sekcja.classList.add('collapsed');
        }
    });
}

function rozwinWszystkieSekcje() {
    const sekcje = document.querySelectorAll('.sekcja');
    sekcje.forEach(sekcja => {
        sekcja.classList.remove('collapsed');
    });
}

// ==============================================
// DRAG & DROP
// ==============================================

// Odświeżenie interakcji bez utraty danych
function odswiezInterakcje() {
    // Zapisz aktualny stan wybranych opcji i dodatkowe teksty
    const zapisaneOpcje = JSON.parse(JSON.stringify(wybraneOpcje));
    const zapisaneDodatkowe = {};

    Object.keys(daneSekcji).forEach(klucz => {
        const pole = document.getElementById(`dodatkowe-${klucz}`);
        if (pole) {
            zapisaneDodatkowe[klucz] = pole.value;
        }
    });

    // Przeładuj sekcje
    document.getElementById('sekcje-container').innerHTML = '';
    inicjalizujSekcje();

    // Przywróć zapisane dane
    Object.keys(zapisaneOpcje).forEach(klucz => {
        zapisaneOpcje[klucz].opcje.forEach(tekst => {
            dodajWybranaOpcje(klucz, tekst);
        });

        // Przywróć dodatkowe teksty
        if (zapisaneDodatkowe[klucz]) {
            const pole = document.getElementById(`dodatkowe-${klucz}`);
            if (pole) {
                pole.value = zapisaneDodatkowe[klucz];
                wybraneOpcje[klucz].dodatkowe = zapisaneDodatkowe[klucz];
            }
        }
    });
}

// Obsługa drag & drop oraz click
function podlaczDragAndDrop() {
    const opcje = document.querySelectorAll('.opcja');
    const obszary = document.querySelectorAll('.obszar-zrzutu');

    // Decyzja: drag&drop TYLKO gdy kolumny poziomo (3 obok siebie)
    const kolumnyPoziomo = czyKolumnyPoziomo();
    const useDragDrop = kolumnyPoziomo;

    opcje.forEach(opcja => {
        if (!useDragDrop) {
            // TRYB CLICK-ONLY (kolumny pionowo)
            opcja.style.cursor = 'pointer';
            opcja.setAttribute('draggable', 'false');

            opcja.addEventListener('click', (e) => {
                const sekcja = e.target.closest('.sekcja').dataset.sekcja;
                const tekst = e.target.dataset.tekst;

                // Wizualna animacja kliknięcia
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);

                dodajWybranaOpcje(sekcja, tekst);
            });
        } else {
            // TRYB DRAG & DROP (kolumny poziomo - 3 obok siebie)
            opcja.style.cursor = 'move';
            opcja.setAttribute('draggable', 'true');

            opcja.addEventListener('dragstart', (e) => {
                draggedElement = e.target;
                e.target.style.opacity = '0.5';
            });

            opcja.addEventListener('dragend', (e) => {
                e.target.style.opacity = '1';
            });
        }
    });

    // Drop area tylko dla drag&drop
    if (useDragDrop) {
        obszary.forEach(obszar => {
            obszar.addEventListener('dragover', (e) => {
                e.preventDefault();
                obszar.classList.add('drag-over');
            });

            obszar.addEventListener('dragleave', () => {
                obszar.classList.remove('drag-over');
            });

            obszar.addEventListener('drop', (e) => {
                e.preventDefault();
                obszar.classList.remove('drag-over');

                if (draggedElement) {
                    const sekcja = obszar.dataset.sekcja;
                    const tekst = draggedElement.dataset.tekst;

                    dodajWybranaOpcje(sekcja, tekst);
                }
            });
        });
    }
}

// Dodawanie wybranej opcji
function dodajWybranaOpcje(sekcja, tekst) {
    if (wybraneOpcje[sekcja].opcje.includes(tekst)) {
        return;
    }
    
    wybraneOpcje[sekcja].opcje.push(tekst);
    
    const container = document.getElementById(`wybrane-${sekcja}`);
    const div = document.createElement('div');
    div.className = 'wybrana-opcja';
    div.innerHTML = `
        <span>${tekst}</span>
        <button onclick="usunOpcje('${sekcja}', '${tekst.replace(/'/g, "\\'")}')">✕ Usuń</button>
    `;
    container.appendChild(div);
    
    sprawdzBalansTrudnosci(sekcja);
}

// Usuwanie wybranej opcji
function usunOpcje(sekcja, tekst) {
    wybraneOpcje[sekcja].opcje = wybraneOpcje[sekcja].opcje.filter(o => o !== tekst);
    
    const container = document.getElementById(`wybrane-${sekcja}`);
    Array.from(container.children).forEach(child => {
        if (child.textContent.includes(tekst)) {
            child.remove();
        }
    });
    
    sprawdzBalansTrudnosci(sekcja);
}

// ==============================================
// PODPOWIEDZI I WALIDACJE
// ==============================================

// Sprawdzanie balansu (czy nie za dużo negatywów)
function sprawdzBalansTrudnosci(sekcja) {
    const opcje = wybraneOpcje[sekcja].opcje;
    const dane = daneSekcji[sekcja];
    
    let trudnosci = 0;
    let mocne = 0;
    
    opcje.forEach(opcja => {
        if (dane.trudnosci.includes(opcja)) trudnosci++;
        if (dane.mocne.includes(opcja)) mocne++;
    });
    
    const podpowiedz = document.getElementById('podpowiedz-wiek');
    const tekstPodpowiedzi = document.getElementById('tekst-podpowiedzi');
    
    if (trudnosci > 0 && mocne === 0 && opcje.length >= 3) {
        podpowiedz.classList.remove('hidden');
        tekstPodpowiedzi.innerHTML = `
            <strong>💭 Chwila refleksji...</strong><br>
            Widzę, że wybrałeś/aś same trudności w sekcji "<em>${dane.tytul}</em>". 
            Czy jest coś, w czym to dziecko jest dobre? Nawet drobny sukces? Jakaś pasja? 
            Moment, gdy się angażuje? <strong>Te "delikatne echa" są ważne</strong> - 
            mogą być kluczem do zrozumienia i wsparcia.
        `;
    }
}

// Nasłuchiwanie na zmianę wieku
function podlaczNasluchiwaczeWiek() {
    const wiekInput = document.getElementById('wiek');
    
    wiekInput.addEventListener('input', () => {
        const wiek = parseInt(wiekInput.value);
        const podpowiedz = document.getElementById('podpowiedz-wiek');
        const tekstPodpowiedzi = document.getElementById('tekst-podpowiedzi');
        
        if (wiek >= 6 && wiek <= 18 && podpowiedziWiekowe[wiek]) {
            podpowiedz.classList.remove('hidden');
            tekstPodpowiedzi.innerHTML = `
                <strong>👀 Patrzysz na dziecko ${wiek}-letnie...</strong><br>
                ${podpowiedziWiekowe[wiek]}
            `;
        } else {
            podpowiedz.classList.add('hidden');
        }
    });
}

// ==============================================
// GENEROWANIE OPINII
// ==============================================

// Przycisk generowania opinii
function podlaczPrzyciskGeneruj() {
    const btn = document.getElementById('generuj-btn');
    btn.addEventListener('click', generujOpinie);
    
    const kopiujBtn = document.getElementById('kopiuj-btn');
    kopiujBtn.addEventListener('click', () => {
        const tekst = document.getElementById('wynik-opinia').textContent;
        navigator.clipboard.writeText(tekst).then(() => {
            kopiujBtn.textContent = '✅ Skopiowano!';
            setTimeout(() => {
                kopiujBtn.textContent = '📋 Kopiuj do schowka';
            }, 2000);
        });
    });
    
    const drukujBtn = document.getElementById('drukuj-btn');
    drukujBtn.addEventListener('click', () => {
        window.print();
    });
}

// Główna funkcja generowania opinii
async function generujOpinie() {
    const imie = document.getElementById('imie').value.trim();
    const wiek = document.getElementById('wiek').value;
    const klasa = document.getElementById('klasa').value.trim();
    
    if (!imie) {
        alert('Proszę podać imię ucznia!');
        return;
    }
    
    // Zbieranie danych z pól dodatkowych
    Object.keys(daneSekcji).forEach(klucz => {
        const pole = document.getElementById(`dodatkowe-${klucz}`);
        if (pole) {
            wybraneOpcje[klucz].dodatkowe = pole.value.trim();
        }
    });
    
    const btn = document.getElementById('generuj-btn');
    btn.textContent = '⏳ Generuję opinię z sercem...';
    btn.disabled = true;
    
    try {
        const opinia = await wywolajAI(imie, wiek, klasa);
        wyswietlOpinie(opinia);
    } catch (error) {
        alert('Wystąpił błąd podczas generowania opinii: ' + error.message);
    } finally {
        btn.textContent = '✨ Generuj opinię z sercem';
        btn.disabled = false;
    }
}

// Wywołanie AI - połączenie z Cloud Functions
async function wywolajAI(imie, wiek, klasa) {
    const response = await fetch('https://europe-west4-generatordokumentownauczyciela.cloudfunctions.net/generate-ppp-opinion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imie: imie,
            wiek: wiek,
            klasa: klasa,
            sekcje: wybraneOpcje
        })
    });
    
    if (!response.ok) {
        throw new Error('Błąd serwera: ' + response.status);
    }
    
    const data = await response.json();
    
    if (!data.success) {
        throw new Error(data.error || 'Nieznany błąd');
    }
    
    return data.opinia;
}

// Wyświetlanie wyniku
function wyswietlOpinie(opinia) {
    const container = document.getElementById('wynik-container');
    const wynikop = document.getElementById('wynik-opinia');

    wynikop.textContent = opinia;
    renderFormularz(opinia);
    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth' });
}

// ==============================================
// FORMULARZ PORADNI (print-only)
// ==============================================

// Wzorce nagłówków sekcji (tolerują drobne wariacje formatowania)
const WZORCE_SEKCJI = [
    { id: 'powod', regex: /Powód zgłoszenia[^\n]*?:?\s*\n/i },
    { id: 'sek1',  regex: /^\s*1[\.\)]\s*Sytuacja domowa[^\n]*?:?\s*\n/im },
    { id: 'sek2',  regex: /^\s*2[\.\)]\s*Postępy[^\n]*?:?\s*\n/im },
    { id: 'sek3',  regex: /^\s*3[\.\)]\s*Opinia nauczyciela[^\n]*?:?\s*\n/im },
    { id: 'sek4',  regex: /^\s*4[\.\)]\s*Stosunek[^\n]*?:?\s*\n/im },
    { id: 'sek5',  regex: /^\s*5[\.\)]\s*Zachowanie[^\n]*?:?\s*\n/im },
    { id: 'sek6',  regex: /^\s*6[\.\)]\s*Stan zdrowia[^\n]*?:?\s*\n/im },
    { id: 'sek7',  regex: /^\s*7[\.\)]\s*Jakiej pomocy[^\n]*?:?\s*\n/im },
    { id: 'sek8',  regex: /^\s*8[\.\)]\s*Inne informacje[^\n]*?:?\s*\n/im }
];

function parsujOpinie(tekst, tpl) {
    const result = {};
    tpl.sekcje.forEach(s => result[s.id] = '');

    const tekstZNowymi = tekst.endsWith('\n') ? tekst : tekst + '\n';

    const pozycje = WZORCE_SEKCJI.map(w => {
        const m = tekstZNowymi.match(w.regex);
        return m ? { id: w.id, start: m.index, len: m[0].length } : null;
    }).filter(p => p !== null).sort((a, b) => a.start - b.start);

    if (pozycje.length === 0) {
        result[tpl.sekcje[0].id] = tekst.trim();
        console.warn('[Formularz] Parser nie znalazł nagłówków sekcji — wstawiam całość do pierwszej sekcji');
        return result;
    }

    pozycje.forEach((poz, i) => {
        const start = poz.start + poz.len;
        const end = i + 1 < pozycje.length ? pozycje[i + 1].start : tekstZNowymi.length;
        // Collapse multiple newlines do jednej spacji — żeby puste linie od AI
        // nie rozdmuchiwały slotu kropek poza jego wysokość
        result[poz.id] = tekstZNowymi.substring(start, end).trim().replace(/\n\s*\n/g, ' ').replace(/\n/g, ' ').replace(/  +/g, ' ');
    });

    return result;
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function renderFormularz(opinia) {
    const tpl = szablonyPoradni[aktywnySzablon];
    const container = document.getElementById('formularz-poradni');
    if (!tpl || !container) return;

    const sekcjeTekst = parsujOpinie(opinia, tpl);

    container.innerHTML = `
        <div class="fp-naglowek-strony">
            <div class="fp-pieczec">Pieczęć szkoły</div>
            <div class="fp-miasto-data">${escapeHtml(tpl.miasto)} <span class="fp-kropki-data"></span></div>
        </div>
        <h2 class="fp-tytul">${escapeHtml(tpl.tytul)}</h2>
        <h3 class="fp-cel">${escapeHtml(tpl.celInstytucji)}</h3>
        <p class="fp-adres">${escapeHtml(tpl.adresPoradni)}  ${escapeHtml(tpl.telefonPoradni)}</p>
        <div class="fp-pola-osobowe">
            ${tpl.polaOsobowe.map(p => `
                <div class="fp-pole-osobowe">
                    <span class="fp-etykieta">${escapeHtml(p)}</span>
                    <span class="fp-kropki-pole"></span>
                </div>
            `).join('')}
        </div>
        <div class="fp-sekcje">
            ${tpl.sekcje.map(s => {
                const linieTla = Array(s.linie).fill(0).map(() => '<div class="fp-linia-pusta"></div>').join('');
                const klasaBreak = s.breakBefore ? ' fp-sekcja--break' : '';
                return `
                <div class="fp-sekcja${klasaBreak}">
                    <h4 class="fp-sekcja-tytul">${escapeHtml(s.naglowek)}</h4>
                    <div class="fp-slot">
                        <div class="fp-linie-tlo">${linieTla}</div>
                        <div class="fp-tresc">${escapeHtml(sekcjeTekst[s.id] || '')}</div>
                    </div>
                </div>
                `;
            }).join('')}
        </div>
        <div class="fp-podpisy">
            ${tpl.podpisy.map(p => `
                <div class="fp-podpis-etykieta">${escapeHtml(p)}</div>
            `).join('')}
        </div>
    `;
}

function podlaczDropdownSzablonu() {
    const sel = document.getElementById('szablon-poradni');
    if (!sel) return;
    sel.addEventListener('change', e => {
        aktywnySzablon = e.target.value;
        const opinia = document.getElementById('wynik-opinia').textContent;
        if (opinia) renderFormularz(opinia);
    });
}