import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Konfiguracja dotenv do wczytania zmiennych środowiskowych
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.BackendPort || 3000;
const app = express();
const serever = createServer(app);
import betterSqlite3 from 'better-sqlite3';
const dbPath = path.resolve(__dirname, 'db.sqlite');
const db = new betterSqlite3(dbPath, { verbose: console.log });


app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/contact', (req, res) => {
    const { author, title, message } = req.body;
    console.log('Received contact form data:', { author, title, message });
    if (!author || !title || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const stmt = db.prepare('INSERT INTO contact_messages (author, title, message) VALUES (?, ?, ?)');
    try {
        stmt.run(author, title, message);
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Data inserted into database successfully');

    res.status(200).json({ message: 'Form submitted successfully' });
});


serever.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);