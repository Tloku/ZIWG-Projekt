import "../product-details/ProductDetails.css";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

const ProductDetails = ({ productName }) => {
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img
          className="product-details-img"
          src={require("../../assets/example-fishing-rod.png")} //TODO change that so logo is taken from props
          alt="Wędka"
        />
      </div>

      <div className="product-details-panel">
        <div className="product-details-name">{productName}</div>

        <div className="product-details-price">
          2003
          <div className="product-details-currency"> zł</div>
        </div>

        <div className="product-details-add-to-cart">
          <div className="product-quantity-input">
            <InputNumber
              className="product-in-cart-input-number"
              inputId="horizontal"
              value={productQuantity}
              inputStyle={{ width: "3em", textAlign: "center" }}
              onValueChange={(e) => setProductQuantity(e.value)}
              showButtons
              buttonLayout="horizontal"
              step={1}
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              decrementButtonClassName="p-button-secondary p-button-sm"
              incrementButtonClassName="p-button-secondary p-button-sm"
              min="0"
            />
          </div>
          <div className="product-details-add-to-cart-button">
            DODAJ DO KOSZYKA
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
