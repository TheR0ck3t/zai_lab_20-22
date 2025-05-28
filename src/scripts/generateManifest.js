import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mediaDir = path.join(__dirname, '../../public/media');
const manifestPath = path.join(mediaDir, 'manifest.json');

const files = fs.readdirSync(mediaDir);

// Grupowanie plików według id (prefiks przed podkreślnikiem lub kropką)
const setsMap = {};

files.forEach(file => {
  const match = file.match(/^(\d+)[_.]/); // np. 6277_instruction.pdf lub 6277.jpg
  if (!match) return;
  const id = match[1];

  if (!setsMap[id]) setsMap[id] = { id };

  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    setsMap[id].image = file;
  }
  if (file.endsWith('.csv')) {
    setsMap[id].csv = file;
  }
  if (file.endsWith('.pdf')) {
    setsMap[id].pdf = file;
  }
  // Dodaj kolejne typy plików jeśli trzeba
});

const sets = Object.values(setsMap);

fs.writeFileSync(manifestPath, JSON.stringify(sets, null, 2));
console.log('Manifest wygenerowany:', manifestPath);