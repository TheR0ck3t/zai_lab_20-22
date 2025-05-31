import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { parseCSVParts, getStorageKey, formatPartsForCSV } from '../utils/partsUtils';

export function useParts(paramId) {
  // Centralne ustalanie ID z fallbackiem na localStorage
  const id = paramId || localStorage.getItem('lastVisitedSet');
  
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Wczytywanie części
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    // Zapisz aktualne ID jako ostatnio odwiedzane
    localStorage.setItem('lastVisitedSet', id);

    const loadParts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Sprawdź localStorage dla części
        const saved = localStorage.getItem(getStorageKey(id));
        if (saved) {
          setParts(JSON.parse(saved));
          setLoading(false);
          return;
        }

        // Pobierz z CSV
        const response = await fetch(`/media/${id}_parts.csv`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const csv = await response.text();
        const result = Papa.parse(csv, {
          header: true,
          skipEmptyLines: true
        });

        if (result.errors.length > 0) {
          console.warn('Błędy parsowania CSV:', result.errors);
        }

        const parsedParts = parseCSVParts(result.data);
        setParts(parsedParts);

      } catch (err) {
        setError(err);
        console.error('Błąd przy ładowaniu części:', err);
      } finally {
        setLoading(false);
      }
    };

    loadParts();
  }, [id]);

  // Zapisywanie części do localStorage
  useEffect(() => {
    if (parts.length > 0 && id) {
      localStorage.setItem(getStorageKey(id), JSON.stringify(parts));
    }
  }, [parts, id]);

  // Aktualizacja części
  const updatePart = (idx, changes) => {
    setParts(currentParts =>
      currentParts.map((part, i) => 
        i === idx ? { ...part, ...changes } : part
      )
    );
  };

  // Pobieranie danych do CSV
  const getCSVData = () => formatPartsForCSV(parts);

  // Czyszczenie localStorage
  const clearStorage = () => {
    if (id) {
      localStorage.removeItem(getStorageKey(id));
      localStorage.removeItem('lastVisitedSet');
    }
  };

  return {
    id, // Zwracamy używane ID
    parts,
    loading,
    error,
    updatePart,
    getCSVData,
    clearStorage
  };
}