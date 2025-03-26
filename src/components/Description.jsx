function Description({ product }) {
    return (
      <div className="product-description">
        <h2>{product.brand} {product.model}</h2>
        <p><strong>Precio:</strong> {product.price}€</p>
        <ul>
          <li><strong>CPU:</strong> {product.cpu}</li>
          <li><strong>RAM:</strong> {product.ram}</li>
          <li><strong>Sistema Operativo:</strong> {product.os}</li>
          <li><strong>Pantalla:</strong> {product.displaySize}</li>
          <li><strong>Batería:</strong> {product.battery}</li>
          <li><strong>Cámara Principal:</strong> {Array.isArray(product.primaryCamera) ? product.primaryCamera.join(', ') : product.primaryCamera}</li>
          <li><strong>Cámara Frontal:</strong> {product.secondaryCmera}</li>
          <li><strong>Dimensiones:</strong> {product.dimentions}</li>
          <li><strong>Peso:</strong> {product.weight}g</li>
        </ul>
      </div>
    );
  }
  
  export default Description;
  