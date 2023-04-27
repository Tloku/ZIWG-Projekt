import "../product/product.css";
import CompareButton from "../compare-button/CompareButton";

const Product = ({ id, name, price, image, dispatch }) => {
  return (
    <div className="product-container">
      <div className="compare-product-button">
        <CompareButton />
      </div>
      <div className="product-content">
        <img
          className="product-img"
          src={`data:image/jpeg;base64,${image && image.imageData}`}
          alt={image && image.name}
        />

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
