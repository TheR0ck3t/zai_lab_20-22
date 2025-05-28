import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ListItem({ part, idx, updatePart }) {
  const price = Number(part.price);
  const quantity = Number(part.quantity);
  const value = (quantity * price).toFixed(2);

  return (
    <tr>
      <td>
        <img
          src={part.image ? `${part.image}` : '/assets/react.svg'}
          alt={part.name}
          width={50}
        />
      </td>
      <td>{part.name} / {part.elementId}</td>
      <td>
        <button onClick={() => updatePart(idx, { quantity: Math.max(0, quantity - 1) })} style={{border: "none", background: "none", cursor: "pointer"}}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        {' '}
        {quantity}
        {' '}
        <button onClick={() => updatePart(idx, { quantity: quantity + 1 })} style={{border: "none", background: "none", cursor: "pointer"}}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </td>
      <td>{price.toFixed(2)} PLN</td>
      <td>{value} PLN</td>
    </tr>
  );
}
