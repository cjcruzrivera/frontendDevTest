function Image({ imgUrl, model }) {
  return (
    <div className="product-image">
      <img src={imgUrl} alt={model} />
    </div>
  );
}

export default Image;
