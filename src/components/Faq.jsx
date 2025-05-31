import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {
    const [faqList, setFaqList] = useState([]);
    const [openIndices, setOpenIndices] = useState({}); // Obiekt śledzący otwarte pytania

    // Pobieranie danych FAQ
    useEffect(() => {
        fetch('/faq.json')
            .then(response => response.json())
            .then(data => {
                console.log('FAQ Data:', data);
                setFaqList(data);
            })
            .catch(error => {
                console.error('Error fetching FAQ data:', error);
                setFaqList([
                    { question: 'Błąd ładowania FAQ', answer: 'Spróbuj ponownie później.' }
                ]);
            });
    }, []);

    // Funkcja do przełączania widoczności odpowiedzi
    const toggleAnswer = (index) => {
        setOpenIndices(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="faq-container">
            <h2>Najczęściej zadawane pytania</h2>
            <p>W tej sekcji znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące naszej aplikacji.</p>
            <div className="faq-list">
                {faqList.length > 0 ? (
                    faqList.map((item, index) => (
                        <article key={index} className="faq-item">
                            <h3 onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer' }}>
                                {item.question} 
                                <FontAwesomeIcon 
                                    icon={openIndices[index] ? faAngleUp : faAngleDown} 
                                    style={{ marginLeft: '8px', transition: 'transform 0.3s' }}
                                />
                            </h3>
                            <p className={`faq-answer ${openIndices[index] ? 'visible' : 'hidden'}`}>
                                {item.answer}
                            </p>
                        </article>
                    ))
                ) : (
                    <p>Ładowanie FAQ...</p>
                )}
            </div>
            <p>Jeśli masz dodatkowe pytania, skontaktuj się z nami.</p>
        </div>
    );
}