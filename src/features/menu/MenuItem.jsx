import { formatCurrency } from "../../utilities/helpers";
import PropsType from "prop-types";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropsType.shape({
    id: PropsType.number,
    name: PropsType.string,
    unitPrice: PropsType.number,
    ingredients: PropsType.array,
    soldOut: PropsType.bool,
    imageUrl: PropsType.string,
  }),
};

export default MenuItem;
