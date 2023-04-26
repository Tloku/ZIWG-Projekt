import "../product/product.css";
import CompareButton from "../compare-button/CompareButton";

const Product = ({ id, name, price, image }) => {
  return (
    <div className="product-container">
      <div className="compare-product-button">
        <CompareButton />
      </div>
      <div className="product-content">
        <img
          className="product-img"
          src={`data:image/jpeg;base64,${image.imageData}`}
          alt={image.name}
        />

        <div className="productInfo">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
          <div className="button-container">
            <div className="button">DO KOSZYKA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
