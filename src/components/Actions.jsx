import { useState } from "react";
import { addToCart } from "../services/apiService";
import { useCart } from "../context/CartContext";

function Actions({ product }) {
  const [selectedStorage, setSelectedStorage] = useState(product.options.storages[0]?.code || "");
  const [selectedColor, setSelectedColor] = useState(product.options.colors[0]?.code || "");
  const [isLoading, setIsLoading] = useState(false);
  const { updateCartCount } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      const response = await addToCart({
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorage
      });
      updateCartCount(response.count);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="product-actions">
      <label>
        Almacenamiento:
        <select 
          value={selectedStorage} 
          onChange={(e) => setSelectedStorage(e.target.value)}
          disabled={isLoading}
        >
          {product.options.storages.map((option) => (
            <option key={option.code} value={option.code}>{option.name}</option>
          ))}
        </select>
      </label>

      <label>
        Color:
        <select 
          value={selectedColor} 
          onChange={(e) => setSelectedColor(e.target.value)}
          disabled={isLoading}
        >
          {product.options.colors.map((color) => (
            <option key={color.code} value={color.code}>{color.name}</option>
          ))}
        </select>
      </label>

      <button 
        onClick={handleAddToCart} 
        disabled={isLoading}
      >
        {isLoading ? 'Añadiendo...' : 'Añadir al carrito'}
      </button>
    </div>
  );
}

export default Actions;
