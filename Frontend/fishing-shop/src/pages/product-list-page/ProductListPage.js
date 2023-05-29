import "../product-list-page/ProductListPage.css";
import ProductFilter from "../../components/product-filter/ProductFilter";
import Product from "../../components/product/Product";
import ShowComparedProductsButton from "../../components/show-compared-products-button/ShowComparedProductsButton";
import useAxiosPost from "../../hooks/useAxiosPost";
import { useDispatch } from "react-redux";
import { addProduct } from "../../stores/ProductReducer";
import { useParams } from "react-router-dom";

const ProductListPage = () => {
  const categoryMapper = new Map([
    ["Przynęty", "BAIT"],
    ["Haczyki", "HOOK"],
    ["Kołowrotki", "REEL"],
    ["Wędki", "FISHING_ROD"],
    ["Linki i plecionki", "LANDING_NET"],
  ]);

  const { category } = useParams();

  const getProductDisplayInfoRequest = {
    categoryName: categoryMapper.get(category),
  };

  const dispatch = useDispatch();

  const backendUrl = process.env.BACKEND_URL;

  const { data, error, loaded } = useAxiosPost(
    `${backendUrl}/api/product/product_display`,
    getProductDisplayInfoRequest
  );

  const addToCartLocal = (product) => {
    dispatch(addProduct(product));
  };

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
                price={item.price}
                image={item.image}
                dispatch={addToCartLocal}
                isProductListPage={true}
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
