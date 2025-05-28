import '../assets/styles/Menu.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


export default function Menu() {
    return (
        <div className="menu">
        <Link to="/">
            <button type="button">
                <FontAwesomeIcon icon={faHouse} />
            </button>
        </Link>
        <Link to="/sets">
            <button type="button">Zestawy</button>
        </Link>
        <Link to="/parts">
            <button type="button">Części</button>
        </Link>
        <Link to="/help">
            <button type="button">Pomoc</button>
        </Link>
        </div>  
    );
}

