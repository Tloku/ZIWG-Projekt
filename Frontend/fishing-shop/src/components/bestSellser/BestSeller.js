import "./bestSeller.css";

import 'bootstrap/dist/css/bootstrap.min.css';  

import Product from "../product/Product";


function BestSeller() {
    let price = "2137.00zł";
  
    return (
    <div >
        <p className="section-title">Bestsellers</p>
        <div className="new-products-wrapper">
        <Product price={price} />       
        </div>
        
        
    </div>
  );
}

export default BestSeller;