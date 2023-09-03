import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">FAST React Pizza Co.</Link>
      <SearchOrder />
      <p>John</p>
    </header>
  );
}

export default Header;
