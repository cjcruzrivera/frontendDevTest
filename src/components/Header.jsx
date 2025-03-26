import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { cartCount } = useCart();

  return (
    <header>
      <div className="header">
        <Link to="/">
          <h1>Mobile Store</h1>
        </Link>
        <nav>
          <p>Carrito: <span id="cart-count">{cartCount}</span></p>
        </nav>
      </div>
      <div className="breadcrumbs">
        <Link to="/">Inicio</Link>
        {!isHome && (
          <>
            <span className="separator">/</span>
            <span className="current">Detalles</span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;