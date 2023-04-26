import "../product-list-page/ProductListPage.css";
import ProductFilter from "../../components/product-filter/ProductFilter";
import Product from "../../components/product/Product";
import ShowComparedProductsButton from "../../components/show-compared-products-button/ShowComparedProductsButton";
import useAxiosPost from "../../hooks/useAxiosPost";

const ProductListPage = ({ category }) => {
  const getProductDisplayInfoRequest = {
    categoryName: "FISHING_ROD",
  };

  const { data, error, loaded } = useAxiosPost(
    "http://localhost:8081/api/product/product_display",
    getProductDisplayInfoRequest
  );

  console.log(data);

  return (
    <div className="product-list-page-container">
      <div className="product-list-page-filter">
        <ProductFilter />
      </div>
      {data && data.productsDisplayInformation ? (
        <div className="product-list-page-list">
          {data.productsDisplayInformation.map((item, index) => {
            return (
              <Product
                id={item.id}
                name={item.name}
                price={item.price + "zł"}
                image={item.image}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <div className="product-list-page-loading">Ładowanie...</div>
      )}

      <div className="compared-products-button">
        <ShowComparedProductsButton />
      </div>
    </div>
  );
};

export default ProductListPage;
