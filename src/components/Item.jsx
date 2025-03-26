import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";

function Item({ product }) {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <ProductImage imgUrl={product.imgUrl} model={product.model} />
        <h3>{product.brand} {product.model}</h3>
        <p>Precio: {product.price || "No disponible"}</p>
      </Link>
    </div>
  );
}

export default Item;