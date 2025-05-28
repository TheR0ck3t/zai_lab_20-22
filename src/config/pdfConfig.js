import { Font, StyleSheet } from '@react-pdf/renderer';

// Rejestracja czcionki - wykonuje się tylko raz
Font.register({
  family: 'Lato',
  src: new URL('../assets/fonts/Lato/Lato-Regular.ttf', import.meta.url).href
});

export const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    fontFamily: 'Lato',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginTop: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  nameCell: {
    width: '40%',
  },
  numericCell: {
    width: '20%',
    textAlign: 'right',
  }
});