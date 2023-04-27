import "../products-in-cart-list/ProductsInCartList.css";
import ProductsInCartListRow from "./products-in-cart-list-row/ProductsInCartListRow";

const ProductsInCartList = ({ products }) => {
  return (
    <div className="products-in-cart-list-container">
      <div className="products-in-cart-list-header">
        Lista zamówionych produktów
      </div>
      <div className="products-in-cart-list-body">
        {products.map((product, index) => {
          return (
            <ProductsInCartListRow
              product={product}
              backgroundColorFlag={index % 2}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsInCartList;
