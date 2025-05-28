/**
 * Generuje losową cenę w przedziale 0.01 - 1.00
 */
export const generateRandomPrice = () => {
  return Number((Math.random() * (1 - 0.01) + 0.01).toFixed(2));
};

/**
 * Oblicza wartość części (ilość * cena)
 */
export const calculatePartValue = (quantity, price) => {
  return (Number(quantity) * Number(price)).toFixed(2);
};

/**
 * Formatuje dane części do eksportu CSV
 */
export const formatPartsForCSV = (parts) => {
  return parts.map(part => ({
    ...part,
    value: calculatePartValue(part.quantity, part.price)
  }));
};

/**
 * Parsuje dane CSV i dodaje brakujące pola
 */
export const parseCSVParts = (csvData) => {
  return csvData.map(part => ({
    ...part,
    quantity: Number(part.quantity) || 0,
    price: part.price ? Number(part.price) : generateRandomPrice()
  }));
};

/**
 * Klucz localStorage dla zestawu
 */
export const getStorageKey = (id) => `parts_${id}`;