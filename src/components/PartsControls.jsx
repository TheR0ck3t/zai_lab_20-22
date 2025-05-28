import { CSVLink } from 'react-csv';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PartsDocument from './PartsDocument';

export default function PartsControls({ parts, setId, getCSVData, clearStorage }) {
  return (
    <div className="controls">
      <button type="button">
        <CSVLink
          data={getCSVData()}
          filename={`${setId}_parts.csv`}
          target="_blank"
          className="csv-link"
        >
          Pobierz CSV
        </CSVLink>
      </button>
      
      <PDFDownloadLink
        document={<PartsDocument parts={parts} setId={setId} />}
        fileName={`${setId}_parts.pdf`}
      >
        {({ loading }) => (
          <button type="button">
            {loading ? "Generowanie PDF..." : "Pobierz PDF"}
          </button>
        )}
      </PDFDownloadLink>

      <button 
        type="button" 
        onClick={clearStorage}
        className="clear-button"
      >
        Wyczyść zapisane dane
      </button>
    </div>
  );
}