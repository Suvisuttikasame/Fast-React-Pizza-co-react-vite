import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cartTotalQuantity = useSelector((state) =>
    state.cart.cart.reduce((acc, cur) => cur.quantity + acc, 0),
  );
  const cartTotalPrice = useSelector((state) =>
    state.cart.cart.reduce((acc, cur) => cur.totalPrice + acc, 0),
  );
  if (!cartTotalQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartTotalQuantity} pizzas</span>
        <span>${cartTotalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
