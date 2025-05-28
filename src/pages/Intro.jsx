import '../assets/styles/Intro.css';
import { Link } from "react-router-dom";

export default function Intro() {
    return (
        <div className="intro">
            <h2>Witaj w aplikacji!</h2>
            <p>Ta aplikacja jest stworzona, aby pomóc Ci w zarządzaniu Twoimi zestawami i częściami.</p>
            <p>Przeglądaj dostępne zestawy, dodawaj nowe części i korzystaj z funkcji wyszukiwania.</p>
            <p>Jeśli potrzebujesz pomocy, przejdź do sekcji <Link to="/help">Pomoc</Link>.</p>
        </div>
    );
}