import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/Image";
import Description from "../components/Description";
import Actions from "../components/Actions";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="product-details">
      <Image imgUrl={product.imgUrl} alt={product.model} />
      <div className="details-container">
        <Description product={product} />
        <Actions product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
