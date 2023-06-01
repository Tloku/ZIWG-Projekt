import "./bestSeller.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Product from "../product/Product";

import { useDispatch } from "react-redux";
import { addProduct } from "../../stores/ProductReducer";
import useAxiosGet from "../../hooks/useAxiosGet";

function BestSeller() {
  const dispatch = useDispatch();

  const backendUrl = process.env.BACKEND_URL;

  const { data, error, loaded } = useAxiosGet(
    `http://localhost:8081/api/product_quantity/bestsellers`
  );

  const addToCartLocal = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div>
      {data && data.productsDisplayInformation.length !== 0 ? (
        <p className="section-title">Bestsellers</p>
      ) : null}

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

export default BestSeller;
