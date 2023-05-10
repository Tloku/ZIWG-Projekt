import "./newProducts.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Product from "../product/Product";

function NewProducts() {
  let price = "2137.00";

  return (
    <div>
      <p className="section-title">New Products</p>
      <div className="new-products-wrapper">
        <Product price={price} />
      </div>
    </div>
  );
}

export default NewProducts;
