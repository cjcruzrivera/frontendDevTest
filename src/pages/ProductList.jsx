import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://itx-frontend-test.onrender.com/api/product")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
