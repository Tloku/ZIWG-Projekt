import "../products-in-cart-list-row/ProductsInCartListRow.css";
import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../../../stores/ProductReducer";

const ProductsInCartListRow = ({ product, backgroundColorFlag }) => {
  const dispatch = useDispatch();
  const { id, name, price, image } = product;

  const dispatchRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const setQuantity = (quantity) => {
    product.quantity = quantity;
    dispatch(updateProduct(product));
  };

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
          src={`data:image/jpeg;base64,${image && image.imageData}`}
          alt={image && image.name}
        />
      </div>
      <div className="product-in-cart-name">{name}</div>

      <div className="product-in-cart-quantity">
        <InputNumber
          className="product-in-cart-input-number"
          inputId="horizontal"
          value={product.quantity}
          inputStyle={{ width: "3em", textAlign: "center" }}
          onValueChange={(e) => setQuantity(e.value)}
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

      <div className="product-in-cart-price">{price}</div>

      <div className="product-remove-from-cart-button">
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="Cancel"
          size="small"
          onClick={() => dispatchRemove(id)}
        />
      </div>
    </div>
  );
};

export default ProductsInCartListRow;
