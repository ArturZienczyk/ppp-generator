from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Twój działający endpoint
CLOUD_FUNCTION_URL = "https://generate-ppp-opinion-931441169979.us-central1.run.app/generate_ppp_opinion"
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/generuj', methods=['POST'])
def generuj_opinie():
    try:
        dane = request.json
        imie = dane.get('imie', '')
        wiek = dane.get('wiek', '')
        klasa = dane.get('klasa', '')
        sekcje = dane.get('sekcje', {})
        
        # Budowanie danych ucznia
        dane_ucznia = f"Imię: {imie}, Wiek: {wiek} lat, Klasa: {klasa}"
        
        # Zbieranie wszystkich obserwacji
        opisy = []
        for klucz, dane_sekcji in sekcje.items():
            opcje = dane_sekcji.get('opcje', [])
            dodatkowe = dane_sekcji.get('dodatkowe', '')
            
            for opcja in opcje:
                opisy.append(opcja)
            
            if dodatkowe:
                opisy.append(dodatkowe)
        
        # Wywołanie Cloud Run
        payload = {
            'dane_ucznia': dane_ucznia,
            'opisy': opisy if opisy else ["Brak szczegółowych obserwacji"]
        }
        
        print(f"Wysyłam do Cloud Run: {payload}")
        
        response = requests.post(CLOUD_FUNCTION_URL, json=payload, timeout=60)
        response.raise_for_status()
        
        result = response.json()
        
        return jsonify({
            'success': True,
            'opinia': result.get('opinia', '')
        })
        
    except requests.exceptions.RequestException as e:
        print(f"Błąd połączenia: {e}")
        return jsonify({
            'success': False,
            'error': f'Błąd połączenia z serwerem: {str(e)}'
        }), 500
    except Exception as e:
        print(f"Błąd: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
    