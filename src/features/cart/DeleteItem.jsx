import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import PropsType from "prop-types";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        dispatch(deleteItem(pizzaId));
      }}
    >
      delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropsType.number,
};

export default DeleteItem;
