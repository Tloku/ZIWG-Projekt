import "../product-filter/ProductFilter.css";
import { Slider } from "primereact/slider";
import { useState } from "react";

const ProductFilter = ({ category }) => {
  const handle = (value) => {
    console.log(value);
  };

  const [value, setValue] = useState([1500, 8000]);

  return (
    <div className="product-filter-container">
      <div className="product-filter-label">Filtruj - {category}</div>
      <div className="product-filter-price">
        <div className="price-filter">Cena</div>
        <Slider
          value={value}
          onChange={(e) => setValue(e.value)}
          range
          max="10000"
        />
        <div className="prices-range">
          {value[0]} - {value[1]}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
