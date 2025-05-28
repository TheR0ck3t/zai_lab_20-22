import { useState, useEffect } from 'react';
import '../assets/styles/Sets.css';

export default function Sets() {
    const [sets, setSets] = useState([]);

    useEffect(() => {
    fetch('/media/manifest.json')
      .then(response => response.json())
      .then(data => {
        console.log('Manifest:', data);
        setSets(data);
      })
      .catch(error => {
        console.error('Błąd podczas ładowania manifestu:', error);
        return (
          <div className="error-message">
            <h2>Błąd podczas ładowania zestawów</h2>
            <p>Spróbuj ponownie później.</p>
          </div>
        );
      });
  }, []);


      return (
    <div className="sets-container">
      <h2>Dostępne zestawy</h2>
      <div className="sets-grid">
        {sets.map(set => (
          <div key={set.id} className="set-card">
            {set.image && (
              <img
                src={`/media/${set.image}`}
                alt={`Zestaw ${set.id}`}
                className="set-image"
              />
            )}
            <h3>Zestaw: {set.id}</h3>

            <div className="set-links">
              {set.csv && (
                <a href={`/parts/${set.id}`}>
                  <button>Części</button>
                </a>
              )}
              {set.pdf && (
                <a href={`/media/${set.pdf}`} target="_blank" rel="noopener noreferrer">
                  <button>Instrukcja PDF</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}