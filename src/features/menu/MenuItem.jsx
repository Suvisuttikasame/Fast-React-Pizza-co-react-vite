import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import PropsType from "prop-types";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
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
