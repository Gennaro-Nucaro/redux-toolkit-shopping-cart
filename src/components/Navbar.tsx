import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const Navbar = () => {
  const total = useAppSelector((state) => state.cart.total);

  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand fs-3" to="/">
          Shopping Cart
        </Link>
        <Link
          className="navbar-brand d-flex align-items-center gap-1"
          to="/cart"
        >
          <i className="bi bi-cart large-icon" />
          <span>{total ? total : ""}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
