import "../product-list-page/ProductListPage.css";
import ProductFilter from "../../components/product-filter/ProductFilter";
import Product from "../../components/product/Product";

const ProductListPage = ({ category }) => {
  return (
    <div className="product-list-page-container">
      <div className="product-list-page-filter">
        <ProductFilter />
      </div>
      <div className="product-list-page-list">
        {[1, 2, 3, 1, 2, 3, 3].map((item, index) => {
          return (
            <Product price={(item * 1000).toString() + "zł"} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListPage;
