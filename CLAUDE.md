# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ppp-generator** is a Polish educational tool for generating teacher's opinions for Psychological-Pedagogical Counseling (PPP - Poradnia Psychologiczno-Pedagogiczna). It uses Google's Gemini 2.5 Pro AI to generate empathetic, structured student assessments based on teacher observations.

**Live deployment:** https://ppp-generator.vercel.app

**Critical principle:** This app intentionally does NOT store personal data. Teachers use pseudonyms, print the generated opinion, and manually fill in real student data with pen on paper. This "paper + pen" workflow ensures RODO/GDPR compliance.

## Architecture

The app follows a serverless, split-region architecture:

```
Frontend (Vercel - Global)
    ↓
europe-west4 Cloud Function (Frankfurt)
    ↓
Google Vertex AI (us-central1)
    ↓
Gemini 2.5 Pro Model
```

### Key Components

1. **Frontend** (`index.html`, `style.css`, `script.js`)
   - Vanilla JavaScript, no frameworks
   - Drag & drop interface for 8 structured sections matching official PPP form
   - Two view modes: "Sekcje" (3-column grid) and "Kompakt" (comparison view)
   - Age-aware contextual hints (6-18 years) displayed dynamically
   - Balance checker to prevent overly negative assessments

2. **Backend Options**
   - **main.py**: Google Cloud Function (production) - deployed to europe-west4
   - **app.py**: Flask proxy for localhost development - proxies requests to Cloud Run endpoint

3. **AI Integration**
   - Uses Vertex AI SDK with `gemini-2.5-pro` model
   - Prompt engineering emphasizes "Truth with Love" ("Prawda z Miłością") approach
   - Teacher persona: 20-year veteran educator who sees whole child, not just problems
   - Structured 8-section output matching official PPP form requirements

### Data Flow

1. User fills form with pseudonyms (e.g., "Uczeń A", "Marta K.")
2. Frontend collects:
   - Basic data: `imie` (name), `wiek` (age), `klasa` (class)
   - Observations from 8 sections: `sekcje` object with `opcje` (selected items) and `dodatkowe` (custom text)
3. Backend transforms to prompt format:
   - `dane_ucznia`: "Imię: X, Wiek: Y lat, Klasa: Z"
   - `opisy`: flat list of all selected observations
4. Gemini generates 500-700 word structured opinion
5. Frontend displays with copy/print buttons

## Development Commands

### Local Development

```bash
# Start Flask development server
python app.py

# Access at http://127.0.0.1:5000
```

**Note:** Local Flask server proxies to the production Cloud Run endpoint defined in `CLOUD_FUNCTION_URL` (app.py:9). It does NOT run local AI inference.

### Deployment

**Frontend (Vercel):**
- Auto-deploys from `main` branch via GitHub integration
- No build step required (static HTML/CSS/JS)

**Backend (Google Cloud Function):**
```bash
# Deploy to europe-west4 region
gcloud functions deploy generate-ppp-opinion \
  --gen2 \
  --runtime=python311 \
  --region=europe-west4 \
  --source=. \
  --entry-point=generate_ppp_opinion \
  --trigger-http \
  --allow-unauthenticated \
  --timeout=300s \
  --memory=1GB
```

**Important:** Backend uses `us-central1` for Vertex AI initialization (main.py:31) but Cloud Function runs in `europe-west4` for EU data residency.

## Code Structure Insights

### The 8 Sections (daneSekcji object in script.js:38-309)

Each section maps to official PPP form requirements:

1. **powod** - Reason for referral (difficulties and onset)
2. **sytuacja** - Home situation (material conditions, family atmosphere, parent cooperation)
3. **postepy** - Academic progress (grades, subjects, repeated classes)
4. **sprawnosc** - Intellectual functioning (thinking, attention, memory, expression)
5. **stosunek** - Attitude toward learning (motivation, response to failures)
6. **zachowanie** - Behavior in school (character, relationships, discipline issues)
7. **zdrowie** - Health and appearance
8. **pomoc** - School interventions provided
9. **inne** - Other relevant information

Each section contains three categorized option lists:
- `trudnosci` (🔴 difficulties)
- `neutralne` (⚪ neutral observations)
- `mocne` (🟢 strengths)

### Contextual Hints System

Two dynamic hint mechanisms:

1. **Age-based developmental hints** (`podpowiedziWiekowe`, script.js:312-326)
   - Triggers when user enters age 6-18
   - Reminds teacher of typical developmental stage (e.g., "7-year-old learning to read is enormous cognitive effort")

2. **Balance warning** (`sprawdzBalansTrudnosci()`, script.js:499-524)
   - Triggers when section has 3+ difficulties selected but zero strengths
   - Prompts teacher to look for "delikatne echa" (gentle echoes) of potential

### Prompt Engineering (main.py:36-77)

The prompt is highly structured:

- **Persona**: "20-year veteran teacher-educator whose heart beats for children"
- **Core principles**: "Truth with Love" - empathy + honesty, observe without diagnosing, see whole child
- **Constraints**:
  - Write as TEACHER not psychologist (observations, not clinical labels)
  - Always mention moments when child "shines"
  - Warm, professional, hopeful tone
  - 500-700 words
- **Structure**: Exact section headers matching official PPP form

## Important Patterns

### RODO/GDPR Compliance

The app shows a prominent warning (`index.html` - RODO warning section):
- Reminds teachers to use pseudonyms only
- Explains "paper + pen" workflow
- No localStorage, no cookies, no databases
- All processing ephemeral

### Error Handling

- Frontend validates required fields (script.js:579-582)
- Backend validates JSON structure (main.py:23-24)
- CORS headers for cross-origin requests (main.py:8-19)
- Cloud Function timeout: 300s (5 minutes) to allow for AI inference

### Testing the AI Generation

When testing, be aware:
- Real endpoint is at: `https://europe-west4-generatordokumentownauczyciela.cloudfunctions.net/generate-ppp-opinion`
- Endpoint in app.py (line 9) points to Cloud Run URL for dev proxy
- Response format: `{ "success": true, "opinia": "..." }` or `{ "success": false, "error": "..." }`

## Future Development Ideas (from README)

**Priority 1: Teacher Profile**
- Allow teacher to define their "voice" (experience level, writing style, opinion length)
- Store profile in localStorage
- Customize prompt based on profile

**Priority 2: Print-ready Format**
- Match official PPP document layout
- Blank fields for manual completion
- Header/footer with school logo, signature area
- Print-specific CSS (`@media print`)

## Znane problemy do uporządkowania

### Historia rozwoju projektu

Projekt powstał z **połączenia dwóch równoległych czatów**:

**Czat 1: Architektura Google Cloud**
- ✅ Zbudował solidną infrastrukturę (Cloud Functions, Vertex AI)
- ❌ Nie miał pełnych danych o strukturze formularza PPP
- ❌ Ton odpowiedzi AI był dobry, ale nie pasował do wymogów dokumentu

**Czat 2: Rozwiązanie webowe**
- ✅ Miał pełną strukturę dokumentu PPP (8 sekcji)
- ✅ Generowany tekst pasował do formularza
- ❌ Nie wykorzystywał potencjału narzędzi Google Cloud
- ❌ Generalnie nie działał z architekturą chmurową

**Czat 3-4: Scalenie**
- Połączono architekturę z czatu 1 ze strukturą z czatu 2
- Stąd chaos z regionami (us-central1 dla Vertex AI, europe-west4 dla Cloud Function)
- **Aktualna wersja działa poprawnie**, ale kod ma historyczne artefakty

### Problem: Mobile UX (drag & drop)

**Status:** Do poprawy

**Problem:**
- Desktop: Drag & drop działa świetnie
- Mobile: Przeciąganie nie działa dobrze na telefonie (touch events)

**Próba rozwiązania:**
- Wcześniej testowano rozwiązanie oparte na **kliknięciu** zamiast drag & drop
- Kliknięcie działało funkcjonalnie
- Problem: **kolumny miały różne szerokości** → brzydko wyglądało

**Do zrobienia:**
- Zaimplementować system click-based dla mobile
- Naprawić szerokość kolumn żeby były równe
- Wykrywać touch device i automatycznie przełączać tryb

## Troubleshooting

**"Błąd 400" when generating:**
Check Cloud Function logs:
```bash
gcloud functions logs read generate-ppp-opinion --region=europe-west4 --limit=50
```

**Frontend sections not loading:**
Open browser DevTools (F12) → Console → check for JavaScript errors

**Localhost proxy failing:**
Verify `CLOUD_FUNCTION_URL` in app.py:9 is current production endpoint

## Project Context

- **Language**: Polish (UI, prompts, generated content)
- **Target users**: Polish elementary/secondary school teachers
- **Use case**: Preparing assessments for psychological-pedagogical counseling
- **Design philosophy**: Empathetic AI assistance while maintaining human oversight and data privacy
