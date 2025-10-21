# 🎶 Umiesz gwizdać? - Generator Opinii PPP

Generator opinii nauczyciela wychowawcy do Poradni Psychologiczno-Pedagogicznej z wykorzystaniem AI (Gemini 2.5 Pro).

🔗 **Wersja live:** https://ppp-generator.vercel.app

---

## ✨ Funkcje (AKTUALNE)

- 📋 **Interaktywny formularz** dla 8 sekcji PPP
- 🖱️ **Inteligentne przełączanie interakcji**:
  - 3 kolumny obok siebie → Drag & Drop ⤢
  - Kolumny pionowo → Click-to-add 👆
  - Automatyczne wykrywanie layoutu
- 🎯 **Dwa tryby wyświetlania**:
  - **Desktop**: Sekcje (3 kolumny) ↔ Kompakt (widok porównawczy)
  - **Mobile**: Wszystkie rozwinięte ↔ Accordion (jedna na raz)
- 📂 **Accordion na mobile**: Zwijanie/rozwijanie sekcji dla łatwiejszego wypełniania
- 🤖 **AI-powered**: Generowanie opinii przez Google Gemini 2.5 Pro
- 💡 **Podpowiedzi kontekstowe**: Wskazówki rozwojowe zależne od wieku dziecka (6-18 lat)
- ⚖️ **Balans trudności/mocnych stron**: Przypomnienia o holistycznym spojrzeniu na dziecko
- 🔒 **Ostrzeżenie RODO**: Przypomnienie o nie używaniu prawdziwych danych
- 📱 **Pełna responsywność**:
  - Desktop → drag & drop w trybie Sekcje, click w Kompakt
  - Tablet → automatyczne przełączanie na click
  - Mobile → touch-friendly click + accordion
- 📋 **Kopiuj do schowka** i 🖨️ **Drukuj** - gotowa opinia
- ☁️ **Cloud Functions**: Backend w Google Cloud (europe-west4)
- 🚀 **Vercel**: Automatyczny deploy z GitHub

---

## 🖱️ System Interakcji

Generator **automatycznie dostosowuje** sposób wybierania opcji do layoutu ekranu:

### **Desktop - Tryb "Sekcje"** (3 kolumny obok siebie)
```
┌─────────────┬─────────────┬─────────────┐
│ 🔴 Trudności│ ⚪ Neutralne│ 🟢 Mocne    │
└─────────────┴─────────────┴─────────────┘
         ↓ PRZECIĄGNIJ I UPUŚĆ ⤢
    ┌──────────────────────────────┐
    │ ⬇️ Strefa zrzutu (blisko!)   │
    └──────────────────────────────┘
```
→ **Drag & Drop** - wygodne, bo strefa zrzutu blisko

### **Desktop - Tryb "Kompakt"** (kolumny jedna nad drugą)
```
┌─────────────────────────────────┐
│ 🔴 Trudności                     │
├─────────────────────────────────┤
│ ⚪ Neutralne                     │
├─────────────────────────────────┤
│ 🟢 Mocne                         │
└─────────────────────────────────┘
         👆 KLIKNIJ OPCJĘ
    ┌──────────────────────────────┐
    │ ✓ Wybrane (daleko na dole)   │
    └──────────────────────────────┘
```
→ **Click-to-add** - łatwiejsze niż przeciąganie z góry na dół

### **Mobile/Tablet** (zawsze pionowo)
```
📱 Touch device
    👆 KLIKNIJ OPCJĘ
    ✓ Wybrane pojawia się pod sekcją

🎛️ Toggle: 📂 Wszystkie ↔ 📋 Jedna na raz (accordion)
```
→ **Click-to-add** + większe przyciski dla palca

**Wszystko dzieje się automatycznie!** Nie musisz nic konfigurować - aplikacja wykrywa layout i przełącza tryb. 🎯

---

## 🎯 Struktura Opinii (8 Akapitów wg Dokumentu PPP)

Generator tworzy opinię zgodną z formularzem używanym w Poradniach Psychologiczno-Pedagogicznych:

1. **Powód zgłoszenia** - jakie występują trudności i od kiedy
2. **Sytuacja domowa ucznia** - warunki materialne, atmosfera rodzinna, współpraca z rodzicami
3. **Postępy ucznia w nauce** - wyniki, przedmioty trudne/dobre, powtarzanie klas
4. **Sprawność intelektualna** - myślenie, uwaga, pamięć, sposób wypowiadania się
5. **Stosunek do nauki** - motywacja, reakcje na niepowodzenia
6. **Zachowanie w szkole** - relacje z rówieśnikami i nauczycielami, trudności wychowawcze
7. **Stan zdrowia** - kondycja fizyczna, przewlekłe schorzenia, wygląd
8. **Pomoc szkoły** - dotychczasowe działania i ich efekty

**Dodatkowa sekcja:** Inne informacje istotne dla diagnozy.

---

## 🔒 Bezpieczeństwo Danych

**WAŻNE:** Generator **NIE przechowuje danych osobowych!**

### Workflow "papier + długopis":
1. ✍️ W generatorze używaj **pseudonimów** (np. "Uczeń A", "Marta K.")
2. 🖨️ **Wydrukuj** wygenerowaną opinię
3. ✏️ **Ręcznie długopisem** uzupełnij prawdziwe dane ucznia
4. ✅ **Podpisz** i przekaż do poradni

**ZERO danych wrażliwych w systemie cyfrowym!** 🛡️

---

## 🚀 Uruchomienie Lokalne

### Wymagania
- Python 3.11+
- Node.js (opcjonalnie, dla Firebase/Vercel)

### Instalacja

1. **Sklonuj repozytorium:**
```bash
git clone https://github.com/ArturZienczyk/ppp-generator.git
cd ppp-generator
```

2. **Uruchom lokalnie:**
```bash
python app.py
```

3. **Otwórz w przeglądarce:**
```
http://127.0.0.1:5000
```

---

## 🏗️ Architektura

```
Frontend (Vercel)
    ↓ fetch
europe-west4 Cloud Functions
    ↓ Vertex AI
Gemini 2.5 Pro
    ↓
Opinia (500-700 słów)
```

### Backend
- **Region:** `europe-west4` (Frankfurt)
- **Model:** `gemini-2.5-pro`
- **Funkcja:** `generate-ppp-opinion`
- **Timeout:** 300s
- **Memory:** 1GB

### Frontend
- **Hosting:** Vercel
- **Deploy:** Automatyczny z GitHub (branch `main`)
- **Domena:** ppp-generator.vercel.app

---

## 📦 Struktura Projektu

```
ppp-generator/
├── index.html          # Frontend - formularz
├── script.js           # Logika drag & drop + wywołanie API
├── style.css           # Style (gradient UI, toggle, animacje)
├── app.py              # Flask proxy (tylko localhost)
├── main.py             # Cloud Function (produkcja)
├── requirements.txt    # Zależności Python
├── Dockerfile          # Konfiguracja kontenera
├── .gitignore
└── README.md
```

---

## 🛠️ Technologie

### Backend
- **Python 3.11**
- **Google Cloud Functions** (Gen 2)
- **Vertex AI** (Gemini 2.5 Pro)
- **Flask** + **Flask-CORS** (localhost only)

### Frontend
- **HTML5** + **CSS3** (Flexbox, Grid, Media Queries)
- **Vanilla JavaScript** (ES6+)
- **Inteligentne wykrywanie layoutu**:
  - `getComputedStyle()` - analiza CSS grid
  - Touch detection API
  - Dynamic event binding
- **Drag & Drop API** + **Click events** (auto-switching)
- **Fetch API** (połączenie z backend)
- **Accordion pattern** dla mobile UX

### DevOps
- **Git** + **GitHub** (wersjonowanie)
- **Vercel** (hosting + CI/CD)
- **Google Cloud** (backend)
- **VS Code** + **Live Server** (development)

---

## 💡 Pomysły na Rozwój

### 🎯 **PRIORYTET 1: Profil Nauczyciela** 
**STATUS:** Pomysł do realizacji

#### Koncept:
Przed wypełnieniem formularza, nauczyciel definiuje swój "głos":

```
┌─────────────────────────────────────┐
│  👤 Kim jesteś jako wychowawca?     │
├─────────────────────────────────────┤
│  📚 Doświadczenie:                  │
│  ○ Początkujący (1-5 lat)          │
│  ● Doświadczony (6-15 lat)         │
│  ○ Weteran (15+ lat)               │
│                                     │
│  💭 Twój styl pisania:              │
│  ☑ Empatyczny, ciepły              │
│  ☑ Konkretny, z przykładami        │
│  ☐ Formalny, rzeczowy              │
│  ☐ Refleksyjny, filozoficzny       │
│                                     │
│  ✍️ Długość opinii:                 │
│  ○ Zwięzła (300-400 słów)         │
│  ● Standardowa (500-700 słów)     │
│  ○ Szczegółowa (800+ słów)        │
└─────────────────────────────────────┘
```

#### Jak działa:
1. **localStorage** zapisuje profil w przeglądarce
2. **Prompt do Gemini** dostosowuje się do profilu
3. **Opinia** brzmi "Twoim głosem"

#### Przykłady stylów:
- **"Mentor z sercem"** → *"Jako wychowawca Marty od 3 lat, obserwuję z radością..."*
- **"Profesjonalista"** → *"Uczeń wykazuje trudności w obszarze..."*
- **"Młody entuzjasta"** → *"Widzę w tym dziecku ogromny potencjał..."*

#### Implementacja:
```javascript
const profilNauczyciela = {
    doswiadczenie: "doświadczony",
    styl: ["empatyczny", "konkretny"],
    dlugosc: "standardowa"
}

const prompt = `
Jesteś ${profilNauczyciela.doswiadczenie} nauczycielem.
Twój styl: ${profilNauczyciela.styl.join(", ")}.
[...reszta promptu...]
`
```

---

### 📄 **PRIORYTET 2: Format Wydruku jak Dokument PPP**

**STATUS:** Do przygotowania

#### Funkcje:
- Przycisk **"Tryb wydruku"**
- **Puste pola** na prawdziwe dane: `Imię i nazwisko: ________________`
- **Nagłówek:** Logo szkoły, dane placówki
- **Stopka:** Miejsce na podpis, datę, pieczątkę
- **@media print** - automatyczne formatowanie
- **Watermark:** *"Dokument roboczy - wymagane ręczne uzupełnienie"*

#### CSS:
```css
@media print {
    .rodo-warning, .generuj-btn, nav { display: none; }
    .wynik-opinia { page-break-inside: avoid; }
}
```

---

### 🔮 **PRZYSZŁOŚĆ (Nice to Have)**

1. **Export do PDF** z wypełnionymi polami
2. **Szablony opinii** (różne poradnie mają różne formularze)
3. **Historia opinii** (localStorage) - możliwość edycji wcześniejszych
4. **Multi-język** (angielski dla szkół międzynarodowych)
5. **Tryb offline** (PWA - Progressive Web App)
6. **Współpraca** - udostępnianie draftu innym nauczycielom

---

## 🐛 Troubleshooting

### Problem: "Błąd 400" przy generowaniu
**Rozwiązanie:**
- Sprawdź czy backend europe-west4 działa: `gcloud functions describe generate-ppp-opinion --region=europe-west4`
- Sprawdź logi: Google Cloud Console → Cloud Functions → Logs

### Problem: Strona nie ładuje sekcji
**Rozwiązanie:**
- Otwórz DevTools (F12) → Console
- Sprawdź błędy JavaScript
- Hard refresh: Ctrl+Shift+R

### Problem: Localhost nie działa
**Rozwiązanie:**
- Sprawdź czy Flask działa: `python app.py`
- Sprawdź port 5000: `http://127.0.0.1:5000`

---

## 📊 Metryki Projektu

- **Czas realizacji:** ~15+ godzin (MVP + mobile UX)
- **Tokeny AI:** ~100k+ użytych (Claude Code)
- **Liczba commitów:** ~20+
- **Pliki:** 9 głównych (+ CLAUDE.md)
- **Linie kodu:** ~1400+ (JS + CSS + Python)

---

## 🙏 Podziękowania

- **Claude AI** - za cierpliwość podczas debugowania 😊
- **Google Gemini 2.5 Pro** - za generowanie empatycznych opinii
- **Vercel** - za darmowy hosting
- **GitHub** - za wersjonowanie ratujące życie

---

## 📝 Licencja

MIT License - używaj i modyfikuj dla celów edukacyjnych.

---

## 💝 Dla Nauczycieli

To narzędzie powstało, aby pomóc nauczycielom w tworzeniu przemyślanych, empatycznych opinii o uczniach. 

**Pamiętaj:** Każde dziecko to unikalna historia! ❤️

Generator to **narzędzie do treningu** - ostateczna opinia zawsze wymaga Twojej ludzkiej mądrości i doświadczenia.

---

**Pytania? Pomysły?** Otwórz [Issue](https://github.com/ArturZienczyk/ppp-generator/issues) lub PR! 🚀