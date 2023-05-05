import "../cart-price-summary/cartPriceSummary.css";
import { Link } from "react-router-dom";import { useEffect, useState } from "react";

const CartPriceSummary = ({ products }) => {
  const shippment = 17;
  const [wholePrice, setWholePrice] = useState(0);

  useEffect(() => {
    setWholePrice(
      products.reduce(
        (partialSum, product) =>
          partialSum + +product.price * +product.quantity,
        0
      )
    );
  }, [products]);

  return (
    <div className="cart-price-summary-container">
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
          <div className="cart-summary-amount">{wholePrice + shippment}</div>
        </div>
      </div>
      <Link style={{textDecoration: 'none', color: "black"}}  to= "/order-finalization">
      <div className="go-to-order-page-button">ZAMÓW</div>
      </Link>
    </div>
  );
};

export default CartPriceSummary;
