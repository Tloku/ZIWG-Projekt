import "../product/product.css";
import Button from "../button/Button";

const Product = ({ price }) => {
  return (
    <div className="product-container">
      <div className="content">
        <img
          className="product-img"
          src={require("../../assets/example-fishing-rod.png")} //TODO change that so logo is taken from props
          alt="Wędka"
        />
        <div className="productInfo">
          <div className="name">Nazwa wędki rsadasdsd</div>
          <div className="price">{price}</div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
