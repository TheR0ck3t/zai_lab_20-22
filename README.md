# Projekt Formularza Kontaktowego

Projekt zawiera formularz kontaktowy z frontendem React oraz backendem Node.js Express. Dane z formularza są przechowywane w bazie danych SQLite.

## Struktura projektu

- `/src` - kod źródłowy aplikacji
  - `/components` - komponenty React
  - `server.js` - backend Node.js z Express
- `db.sqlite` - baza danych SQLite

## Wymagania wstępne

- Node.js (v14 lub wyższy)
- npm (v6 lub wyższy)

## Instalacja

1. Sklonuj repozytorium:

```bash
git clone [adres-repozytorium]
cd zai_lab_20-22
```

2. Zainstaluj zależności:

```bash
npm install
```

3. Utwórz plik `.env` w katalogu głównym projektu według poniższego wzoru:

```
# Zmienne środowiskowe dla backendu (Node.js)
BackendUrl = http://localhost:3000
BackendPort = 3000

# Zmienne środowiskowe dla frontendu (React/Vite)
# Uwaga: tylko zmienne z prefiksem VITE_ będą dostępne w kodzie frontendowym
VITE_BackendUrl = http://localhost:3000
VITE_BackendPort = 3000
```

## Uruchamianie aplikacji

### Uruchamianie serwera backend

```bash
# Z głównego katalogu projektu
node src/server.js
```

Serwer będzie dostępny pod adresem: http://localhost:3000

### Uruchamianie w trybie development (frontend)

```bash
# Z głównego katalogu projektu
npm run dev
```

Aplikacja developerska będzie dostępna pod adresem: http://localhost:5173 (lub inny port wskazany przez Vite)

## Konfiguracja zmiennych środowiskowych

### Backend (Node.js)

- `BackendUrl` - adres URL serwera backend
- `BackendPort` - port, na którym uruchomiony jest serwer backend

### Frontend (React/Vite)

- `VITE_BackendUrl` - adres URL serwera backend, dostępny w aplikacji frontend
- `VITE_BackendPort` - port serwera backend, dostępny w aplikacji frontend

## Funkcjonalności

- Formularz kontaktowy z polami: email, tytuł i treść
- Walidacja pól formularza
- Zapisywanie wiadomości w bazie danych SQLite
- Komunikaty o powodzeniu lub błędzie podczas wysyłania
