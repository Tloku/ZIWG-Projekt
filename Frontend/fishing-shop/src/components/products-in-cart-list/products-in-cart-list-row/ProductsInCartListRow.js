import "../products-in-cart-list-row/ProductsInCartListRow.css";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { Button } from "primereact/button";

const ProductsInCartListRow = ({ backgroundColorFlag }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div
      className="products-in-cart-list-row-container"
      style={{
        backgroundColor: backgroundColorFlag ? "#c8d2d8" : "#dae5ea",
      }}
    >
      <div className="products-cart-list-row-image">
        <img
          className="product-in-cart-row-img"
          src={require("../../../assets/example-fishing-rod.png")} //TODO change that so logo is taken from props
          alt="Wędka"
        />
      </div>
      <div className="product-in-cart-name">
        Przykladowa wędka v1.2 Turbo kox
      </div>

      <div className="product-in-cart-quantity">
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

      <div className="product-in-cart-price">2137.00zl</div>

      <div className="product-remove-from-cart-button">
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="Cancel"
          size="small"
        />
      </div>
    </div>
  );
};

export default ProductsInCartListRow;
