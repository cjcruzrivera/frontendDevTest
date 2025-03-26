import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header>
      <div className="header">
        <Link to="/">
          <h1>Mobile Store</h1>
        </Link>
        <nav>
          <p>Carrito: <span id="cart-count">0</span></p>
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