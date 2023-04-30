import "../cart-page/Cartpage.css";
import ProductsInCartList from "../../components/products-in-cart-list/ProductsInCartList";
import CartPriceSummary from "../../components/cart-price-summary/CartPriceSummary";
import { useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="cart-page-container">
      <div className="cart-page-title">Twój koszyk</div>
      <div className="cart-page-content">
        <div className="cart-page-products-table">
          <ProductsInCartList
            products={products.filter((product) => product.name)}
          />
        </div>
        <div className="cart-page-summary-component">
          <CartPriceSummary products={products} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
