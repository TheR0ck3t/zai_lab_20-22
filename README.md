
#  ZAI Lab 20-22 – Brick Lister

## 🧱 Stack technologiczny

- ⚛️ React (frontend)
- 🌐 Express (backend)
- 🐿️ SQLite (`better-sqlite3`)
- 🛠️ Vite (dev server)
- 📦 npm (zarządzanie paczkami)
- 🔐 dotenv (`VITE_`-prefixed env vars)

---

## 📁 Struktura katalogów

```
zai_lab_20-22/
├── public/                     # 📂 Statyczne zasoby dostępne bezpośrednio z URL
│   ├── media/                  # 📦 Pliki CSV, obrazki i instrukcje PDF zestawów
│   │   ├── *_parts.csv      # Lista części dla zestawu *
│   │   ├── *_preview.jpg    # Obrazek zestawu *
│   │   ├── *_manual.pdf     # Instrukcja zestawu *
│   │   └── manifest.json +     # Automatycznie generowany plik grupujące pliki dla danych zestawów bazując na prefikse z numerem zestawu
│   └── faq.json                # Plik Json z FAQ
├── src/
│   ├── server.js               # 🖥️ Backend Express + SQLite
│   ├── db.sqlite               # 🗃️ Lokalna baza danych SQLite
│   ├── components/             # 🧩 Komponenty Reactowe (Form, ListItem, SplitScreen itd.)
│   ├── pages/                  # 📄 Podstrony SPA (Intro, Help, Sets, Parts)
│   ├── assets/                 # 🎨 Style CSS, czcionki i grafiki statyczne
│   │   ├── styles/             # Pliki CSS dla komponentów
│   │   └── fonts/              # Własne czcionki (np. Lato-Regular.ttf)
│   ├── hooks/                  # 🪝 Custom hooki (np. useParts.js do logiki tabeli)
│   ├── App.jsx                 # Główna aplikacja React
│   ├── Pages.jsx              # Routing aplikacji (React Router)
│   └── main.jsx               # Entry point – punkt startowy React/Vite
├── .env                        # 🔐 Zmienne środowiskowe (VITE_API_URL)
├── package.json                # 📦 Zarządzanie zależnościami (npm)
├── vite.config.js              # ⚙️ Konfiguracja Vite (jeśli istnieje)
└── README.md                   # 📘 Ten plik

```

---

## 🚀 Uruchomienie projektu

### 📦 Wymagania

- Node.js `v18+`
- npm
- (opcjonalnie) SQLite CLI

---
### 🖥️ Backend + 🌐 Frontend
W głównym folderze projektu (`zai_lab_20-22/`)
```bash
npm run dev
```
Uruchomi to wersję developerską frontendu oraz backend jednocześnie

Otwórz: [http://localhost:5173](http://localhost:5173)

---

## 🔧 Konfiguracja środowiska

W głównym folderze projektu (`zai_lab_20-22/`) stwórz plik `.env`:

```env
# Zmienne środowiskowe dla backendu (Node.js)
BackendUrl = 
BackendPort = 

# Zmienne środowiskowe dla frontendu (React/Vite)
VITE_BackendUrl = 
VITE_BackendPort = 
```

> ⚠️ W Vite wszystkie zmienne środowiskowe muszą zaczynać się od `VITE_`

---

## 🔌 Endpointy API

### POST `/api/contact`

Zapisuje dane formularza kontaktowego do bazy danych.

**Body (JSON):**
```json
{
  "author": "Imię",
  "title": "Tytuł",
  "message": "Treść wiadomości"
}
```

---

## 📑 Struktura bazy danych

```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

---
