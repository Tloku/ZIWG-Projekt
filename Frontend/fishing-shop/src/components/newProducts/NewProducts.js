import "./newProducts.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Product from "../product/Product";
import { useDispatch } from "react-redux";
import useAxiosGet from "../../hooks/useAxiosGet";
import { addProduct } from "../../stores/ProductReducer";

function NewProducts() {
  const dispatch = useDispatch();

  const backendUrl = process.env.BACKEND_URL;

  const { data, error, loaded } = useAxiosGet(
    `${backendUrl}/api/product/newProducts`
  );

  const addToCartLocal = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div>
      <p className="section-title">New Products</p>
      {data && data.productsDisplayInformation ? (
        <div className="new-products-wrapper">
          {data.productsDisplayInformation.map((item, index) => {
            return (
              <Product
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                dispatch={addToCartLocal}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <div className="product-list-page-loading">Ładowanie...</div>
      )}
    </div>
  );
}

export default NewProducts;
