// ==============================================
// OBSŁUGA TOGGLE WIDOKÓW (Sekcje vs Kompakt)
// ==============================================

function inicjalizujToggle() {
    const toggleSwitch = document.getElementById('viewToggle');
    const sekcjeContainer = document.getElementById('sekcje-container');
    const toggleOptions = document.querySelectorAll('.toggle-option');
    
    if (!toggleSwitch) return;
    
    toggleSwitch.addEventListener('click', (e) => {
        const clickedOption = e.target.closest('.toggle-option');
        if (!clickedOption) return;
        
        const view = clickedOption.dataset.view;
        
        // Przełącz aktywną opcję
        toggleOptions.forEach(opt => opt.classList.remove('active'));
        clickedOption.classList.add('active');
        
        // Przełącz slider i tryb
        if (view === 'compact') {
            toggleSwitch.classList.add('compact-mode');
            sekcjeContainer.classList.add('compact-mode');
        } else {
            toggleSwitch.classList.remove('compact-mode');
            sekcjeContainer.classList.remove('compact-mode');
        }
    });
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

// ==============================================
// INICJALIZACJA
// ==============================================

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    inicjalizujToggle();
    inicjalizujSekcje();
    podlaczNasluchiwaczeWiek();
    podlaczPrzyciskGeneruj();
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
        sekcjaDiv.innerHTML = `
            <h3>${dane.tytul}</h3>
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
                <h4>⬇️ Przeciągnij tutaj wybrane obserwacje:</h4>
                <div class="wybrane-opcje" id="wybrane-${klucz}"></div>
            </div>
            
            ${dane.poleDodatkowe ? `
                <div class="pole-dodatkowe">
                    <label>${dane.poleDodatkowe}</label>
                    <textarea id="dodatkowe-${klucz}" placeholder="Możesz dodać własne uwagi..."></textarea>
                </div>
            ` : ''}
        `;
        
        container.appendChild(sekcjaDiv);
    });
    
    podlaczDragAndDrop();
}

// ==============================================
// DRAG & DROP
// ==============================================

// Obsługa drag & drop
function podlaczDragAndDrop() {
    const opcje = document.querySelectorAll('.opcja');
    const obszary = document.querySelectorAll('.obszar-zrzutu');
    
    opcje.forEach(opcja => {
        opcja.addEventListener('dragstart', (e) => {
            draggedElement = e.target;
            e.target.style.opacity = '0.5';
        });
        
        opcja.addEventListener('dragend', (e) => {
            e.target.style.opacity = '1';
        });
    });
    
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

// Dodawanie wybranej opcji
function dodajWybranaOpcje(sekcja, tekst) {
    if (wybraneOpcje[sekcja].opcje.includes(tekst)) {
        return; // Już jest
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

// Wywołanie AI - połączenie z Flask i Cloud Run
async function wywolajAI(imie, wiek, klasa) {
    const response = await fetch('https://generate-ppp-opinion-931441169979.us-central1.run.app/generuj', {
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
    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth' });
}
