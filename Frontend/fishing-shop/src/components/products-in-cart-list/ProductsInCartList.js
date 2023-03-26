import "../products-in-cart-list/productsInCartList.css";
import ProductsInCartListRow from "./products-in-cart-list-row/ProductsInCartListRow";

const ProductsInCartList = () => {
  return (
    <div className="products-in-cart-list-container">
      <div className="products-in-cart-list-header">
        Lista zamówionych produktów
      </div>
      <div className="products-in-cart-list-body">
        <ProductsInCartListRow />
      </div>
    </div>
  );
};

export default ProductsInCartList;
