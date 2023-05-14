import "../cart-price-summary/cartPriceSummary.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { saveUUID } from "../../stores/CustomerOrderUUIDReducer";
import { useSelector } from "react-redux";
import { Toast } from "primereact/toast";

const CartPriceSummary = ({ products }) => {
  const toast = useRef(null);
  const shippment = 17;
  const dispatch = useDispatch();
  const [wholePrice, setWholePrice] = useState(0);
  const navigate = useNavigate();
  const oldUUID = useSelector((state) => state.uuid);

  useEffect(() => {
    setWholePrice(
      products.reduce(
        (partialSum, product) =>
          partialSum + +product.price * +product.quantity,
        0
      )
    );
  }, [products]);

  const navigateToOrderFinalization = () => {
    if (products.length === 0) {
      showMessage(
        "warn",
        "Pusty koszyk",
        "Dodaj produkt do koszyka, by móc kontynuować"
      );
      return;
    }
    const uuid = generateUUID();
    navigate("/order-finalization/" + uuid);
  };

  const generateUUID = () => {
    if (oldUUID !== "") {
      return oldUUID;
    }
    const uuid = uuidv4();
    dispatch(saveUUID(uuid));
    return uuid;
  };

  const showMessage = (severity, summary, detail) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000,
    });
  };

  return (
    <div className="cart-price-summary-container">
      <Toast ref={toast} position="top-center" />
      <div className="cart-summary-title">Podsumowanie</div>
      <div className="cart-price-info">
        <div className="cart-price-row">
          <div className="cart-whole-price-label">Kwota:</div>
          <div className="cart-whole-price">{wholePrice.toFixed(2)}</div>
        </div>
        <div className="cart-price-row">
          <div className="cart-delivery-price-label">Dostawa:</div>
          <div className="cart-delivery-price">+{shippment}</div>
        </div>
        <div className="cart-price-row">
          <div className="cart-summary-amount-label">Łącznie:</div>
          <div className="cart-summary-amount">
            {(wholePrice + shippment).toFixed(2)}
          </div>
        </div>
      </div>
      <div
        onClick={() => navigateToOrderFinalization()}
        className="go-to-order-page-button"
      >
        ZAMÓW
      </div>
    </div>
  );
};

export default CartPriceSummary;
