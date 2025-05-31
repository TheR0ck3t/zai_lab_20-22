import '../assets/styles/Intro.css';
import { Link } from "react-router-dom";

export default function Intro() {
    return (
        <div className="intro-container">
            <h1>
                Witaj w aplikacji Brick Lister!
            </h1>
            <p>
                Ta aplikacja pozwala na zarządzanie częściami LEGO z różnych zestawów.
            </p>
            <p>
                Możesz przeglądać dostępne zestawy, pobierać listy części w formacie CSV lub PDF, a także edytować informacje o częściach.
            </p>
            <p>
                Aby rozpocząć, przejdź do <Link to="/sets">listy zestawów</Link>.
            </p>
            <p>
                Jeśli potrzebujesz pomocy, przejdź do sekcji <Link to="/help">Pomoc</Link>.
            </p>
        </div>
    );
}