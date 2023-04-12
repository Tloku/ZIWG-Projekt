import "../product/product.css";
import CompareButton from "../compare-button/CompareButton";

const Product = ({ price }) => {
  return (
    <div className="product-container">
      <div className="compare-product-button">
        <CompareButton />
      </div>
      <div className="product-content">
        <img
          className="product-img"
          src={require("../../assets/example-fishing-rod.png")} //TODO change that so logo is taken from props
          alt="Wędka"
        />
        <div className="productInfo">
          <div className="name">Nazwa wędki rsadasdsd</div>
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
