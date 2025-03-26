import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1> Mobile Store</h1>
      </Link>
      <nav>
        <p>Carrito: <span id="cart-count">0</span></p>
      </nav>
    </header>
  );
}

export default Header;