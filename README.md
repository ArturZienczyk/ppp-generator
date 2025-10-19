# 🎶 Umiesz gwizdać? - Generator Opinii PPP

Generator opinii nauczyciela wychowawcy do Poradni Psychologiczno-Pedagogicznej z wykorzystaniem AI (Gemini 2.5 Pro).

## ✨ Funkcje

- 📋 **Interaktywny formularz** z drag & drop
- 🎯 **Dwa tryby wyświetlania**: Sekcje (3 kolumny) i Kompakt (widok porównawczy)
- 🤖 **AI-powered**: Generowanie opinii przez Google Gemini 2.5 Pro
- 💡 **Podpowiedzi kontekstowe**: Wskazówki rozwojowe zależne od wieku dziecka
- ⚖️ **Balans trudności/mocnych stron**: Przypomnienia o holistycznym spojrzeniu na dziecko
- 📱 **Responsywny design**: Działa na komputerach i tabletach
- ☁️ **Cloud Run**: Backend wdrożony w Google Cloud

## 🚀 Uruchomienie lokalne

### Wymagania

- Python 3.8+
- Klucz API Google Gemini

### Instalacja

1. **Sklonuj repozytorium:**
```bash
git clone https://github.com/TwojeNazwaUzytkownika/ppp-generator.git
cd ppp-generator
```

2. **Utwórz wirtualne środowisko:**
```bash
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
```

3. **Zainstaluj zależności:**
```bash
pip install -r requirements.txt
```

4. **Ustaw klucz API:**
Utwórz plik `.env` w głównym folderze:
```
GEMINI_API_KEY=twoj_klucz_api_tutaj
```

5. **Uruchom aplikację:**
```bash
python app.py
```

6. **Otwórz w przeglądarce:**
```
http://127.0.0.1:5000
```

## 📦 Struktura projektu

```
ppp-generator/
├── app.py              # Backend Flask + Gemini API
├── templates/
│   └── index.html      # Frontend HTML
├── static/
│   ├── style.css       # Style z premium toggle
│   └── script.js       # JavaScript (drag & drop, toggle)
├── requirements.txt    # Zależności Python
├── .gitignore
└── README.md
```

## 🎨 Tryby wyświetlania

### 📋 Tryb Sekcji (domyślny)
- 3 kolumny obok siebie (Trudności, Neutralne, Mocne strony)
- Obszar zrzutu na dole każdej sekcji
- Więcej przestrzeni, przejrzysty układ

### 🎯 Tryb Kompaktowy
- Kolumny po lewej stronie (pionowo)
- Obszar zrzutu po prawej (sticky)
- Mniej scrollowania, szybszy workflow

## 🤖 Backend (Cloud Run)

Backend wdrożony na Google Cloud Run:
```
https://generate-ppp-opinion-931441169979.us-central1.run.app
```

## 🛠️ Technologie

- **Backend**: Python, Flask, Google Gemini AI
- **Frontend**: HTML5, CSS3 (Flexbox, Grid), Vanilla JavaScript
- **API**: Google Generative AI (Gemini 2.5 Pro)
- **Cloud**: Google Cloud Run
- **Design**: Gradient UI, drag & drop, premium toggle switch

## 📝 Licencja

MIT License - możesz swobodnie używać i modyfikować dla celów edukacyjnych.

## 💝 Dla nauczycieli z sercem

To narzędzie powstało, aby pomóc nauczycielom w tworzeniu przemyślanych, empatycznych opinii o uczniach. Pamiętaj: każde dziecko to unikalna historia! ❤️

---

**Pytania? Problemy?** Otwórz [Issue](https://github.com/TwojeNazwaUzytkownika/ppp-generator/issues)!