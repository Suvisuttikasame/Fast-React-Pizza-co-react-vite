import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import PropsType from "prop-types";

function UpdatePizzaItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-1">
      <Button
        type="add"
        onClick={() => {
          dispatch(increaseItemQuantity(pizzaId));
        }}
      >
        +
      </Button>
      <span className="font-medium">{currentQuantity}</span>
      <Button
        type="add"
        onClick={() => {
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
    </div>
  );
}

UpdatePizzaItem.propTypes = {
  pizzaId: PropsType.number,
  currentQuantity: PropsType.number,
};

export default UpdatePizzaItem;
