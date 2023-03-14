import "../product/product.css";
import Button from "../button/Button";

const Product = ({ price }) => {
  return (
    <div className="container">
      <div className="content">
        <img
          src={require("../../assets/example-fishing-rod.png")} //TODO change that so logo is taken from props
          alt="Wędka"
          className="productImg"
        />
        <div className="productInfo">
          <div className="price">{price}</div>
          <div className="price">{price}</div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
