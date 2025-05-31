import '../assets/styles/Help.css';
import { useState } from 'react';
import Form from  '../components/Form'
import Faq from '../components/Faq';
import SplitScreen from '../components/SplitScreen';


export default function Help() {
    const [orientation, setOrientation] = useState("horizontal");

    const toggleLayout = () => {
        setOrientation(prevOrientation => 
            prevOrientation === "horizontal" ? "vertical" : "horizontal"
        );
    };

    return (
        <div className="help">
            <h2>Pomoc</h2>
            <p>W tej sekcji znajdziesz pomoc dotyczącą korzystania z aplikacji.</p>
            <p>Jeśli masz pytania lub potrzebujesz wsparcia, skontaktuj się z nami.</p>
            <p>Przeglądaj dostępne zasoby i odkrywaj nowe możliwości!</p>
            <button type="button" onClick={toggleLayout}>
                Zmień na układ {orientation === "horizontal" ? "pionowy" : "poziomy"}
            </button>
            <SplitScreen 
                first={<Faq />}
                second={<Form />}
                orientation={orientation}
            />
            
        </div>

    );
}