import "../product/product.css";
import CompareButton from "../compare-button/CompareButton";
import { Link } from "react-router-dom";

const Product = ({ id, name, price, image, dispatch, isProductListPage }) => {
  return (
    <div className="product-container">
      {isProductListPage ? (
        <div className="compare-product-button">
          <CompareButton />
        </div>
      ) : null}

      <div className="product-content">
        <Link className="product-image-link" to="/product-details/:id">
          <img
            className="product-img"
            src={`data:image/jpeg;base64,${image && image.imageData}`}
            alt={image && image.name}
          />
        </Link>
        <div className="productInfo">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
          <div className="button-container">
            <div
              className="button"
              onClick={() =>
                dispatch({
                  id: id,
                  name: name,
                  image: image,
                  price: price,
                  quantity: 1,
                })
              }
            >
              DO KOSZYKA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
