import { useParams, Link } from 'react-router-dom';
import RegularList from '../components/RegularList';
import PartsControls from '../components/PartsControls';
import { useParts } from '../hooks/useParts';
import '../assets/styles/Parts.css';

export default function Parts() {
  const { id } = useParams();
  const { parts, loading, error, updatePart, getCSVData, clearStorage } = useParts(id);

  if (!id) {
    return (
      <div className="error-message">
        <h2>Brak identyfikatora zestawu</h2>
        <p>Proszę wybrać zestaw z <Link to="/sets">listy</Link>.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-message">
        <h2>Ładowanie części...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Błąd ładowania części</h2>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>
          Spróbuj ponownie
        </button>
      </div>
    );
  }

  return (
    <div className="parts-page">
      <h2>Części dla zestawu {id}</h2>
      
      <PartsControls 
        parts={parts}
        setId={id}
        getCSVData={getCSVData}
        clearStorage={clearStorage}
      />
      
      <div className="parts-container">
        <RegularList parts={parts} updatePart={updatePart} />
      </div>
    </div>
  );
}
