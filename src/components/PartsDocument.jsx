import { Document, Page, View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../config/pdfConfig';
import { calculatePartValue } from '../utils/partsUtils';

export default function PartsDocument({ parts, setId }) {
  if (!parts || parts.length === 0) {
    return (
      <Document>
        <Page size="A4" style={pdfStyles.page}>
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.title}>
              Brak części dla zestawu {setId}
            </Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>
            Części dla zestawu {setId}
          </Text>
          
          <View style={pdfStyles.table}>
            {/* Nagłówek tabeli */}
            <View style={[pdfStyles.tableRow, pdfStyles.tableHeader]}>
              <Text style={[pdfStyles.tableCell, pdfStyles.nameCell]}>
                Nazwa / Numer
              </Text>
              <Text style={[pdfStyles.tableCell, pdfStyles.numericCell]}>
                Ilość
              </Text>
              <Text style={[pdfStyles.tableCell, pdfStyles.numericCell]}>
                Cena
              </Text>
              <Text style={[pdfStyles.tableCell, pdfStyles.numericCell]}>
                Wartość
              </Text>
            </View>
            
            {/* Wiersze tabeli */}
            {parts.map((part, idx) => (
              <View key={part.elementId || idx} style={pdfStyles.tableRow}>
                <Text style={[pdfStyles.tableCell, pdfStyles.nameCell]}>
                  {part.name} / {part.elementId}
                </Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.numericCell]}>
                  {part.quantity}
                </Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.numericCell]}>
                  {Number(part.price).toFixed(2)} PLN
                </Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.numericCell]}>
                  {calculatePartValue(part.quantity, part.price)} PLN
                </Text>
              </View>
            ))}
          </View>
          
          {/* Podsumowanie */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              Łączna wartość: {
                parts.reduce((sum, part) => 
                  sum + Number(calculatePartValue(part.quantity, part.price)), 0
                ).toFixed(2)
              } PLN
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}