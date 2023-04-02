import "../cart-price-summary/cartPriceSummary.css";

const CartPriceSummary = ({ price, shippment }) => {
  return (
    <div className="cart-price-summary-container">
      <div className="cart-summary-title">Podsumowanie</div>
      <div className="cart-price-info">
        <div className="cart-price-row">
          <div className="cart-whole-price-label">Kwota:</div>
          <div className="cart-whole-price">{price} 10000</div>
        </div>
        <div className="cart-price-row">
          <div className="cart-delivery-price-label">Dostawa:</div>
          <div className="cart-delivery-price">+{shippment} 17</div>
        </div>
        <div className="cart-price-row">
          <div className="cart-summary-amount-label">Łącznie:</div>
          <div className="cart-summary-amount">100017</div>
        </div>
      </div>
      <div className="go-to-order-page-button">ZAMÓW</div>
    </div>
  );
};

export default CartPriceSummary;