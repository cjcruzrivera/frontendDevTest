import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
import Search from "../components/Search";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://itx-frontend-test.onrender.com/api/product")
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error("Error fetching products:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product => 
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
