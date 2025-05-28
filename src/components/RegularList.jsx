import ListItem from "./ListItem.jsx";
export default function RegularList({ parts, updatePart }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Obraz</th>
                    <th>Nazwa / Numer</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                    <th>Wartość</th>
                </tr>
            </thead>
            <tbody>
                {parts.map((part, idx) => (
                    <ListItem
                        key={part.elementId || idx}
                        part={part}
                        idx={idx}
                        updatePart={updatePart}
                    />
                ))}
            </tbody>
        </table>
    );
}