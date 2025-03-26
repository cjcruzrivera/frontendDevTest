import { useState } from "react";

function Actions({ product }) {
  const [selectedStorage, setSelectedStorage] = useState(product.options.storages[0]?.code || "");
  const [selectedColor, setSelectedColor] = useState(product.options.colors[0]?.code || "");

  const handleAddToCart = () => {
    fetch("https://itx-frontend-test.onrender.com/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorage
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Productos en carrito:", data.count);
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="product-actions">
      <label>
        Almacenamiento:
        <select value={selectedStorage} onChange={(e) => setSelectedStorage(e.target.value)}>
          {product.options.storages.map((option) => (
            <option key={option.code} value={option.code}>{option.name}</option>
          ))}
        </select>
      </label>

      <label>
        Color:
        <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
          {product.options.colors.map((color) => (
            <option key={color.code} value={color.code}>{color.name}</option>
          ))}
        </select>
      </label>

      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
}

export default Actions;
