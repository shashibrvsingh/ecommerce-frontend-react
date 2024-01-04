function ProductCard({ product }) {
  return (
    <div class="">
      <div class="product-display-internal">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ height: "230px", width: "300px" }}
        />
        <p> {product.name} </p>
        <p>
          <span class="has-text-weight-bold">Price: {product.unitPrice}$</span>
        </p>
        <div class="has-text-centered">
          <button class="button is-link">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
