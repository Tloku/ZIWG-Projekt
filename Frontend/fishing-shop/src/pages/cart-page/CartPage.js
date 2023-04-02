import "../cart-page/Cartpage.css";
import ProductsInCartList from "../../components/products-in-cart-list/ProductsInCartList";
import CartPriceSummary from "../../components/cart-price-summary/CartPriceSummary";

const CartPage = () => {
  return (
    <div className="cart-page-container">
      <div className="cart-page-title">Twój koszyk</div>
      <div className="cart-page-content">
        <div className="cart-page-products-table">
          <ProductsInCartList />
        </div>
        <div className="cart-page-summary-component">
          <CartPriceSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
