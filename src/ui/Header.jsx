import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-400">
      <Link to="/">FAST React Pizza Co.</Link>
      <SearchOrder />
      <p>John</p>
    </header>
  );
}

export default Header;
