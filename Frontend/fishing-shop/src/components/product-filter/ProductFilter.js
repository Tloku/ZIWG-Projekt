import "../product-filter/ProductFilter.css";
import { Slider } from "primereact/slider";
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

const ProductFilter = ({ category }) => {
  const [value, setValue] = useState([1500, 8000]);
  const [length, setLength] = useState([100, 700]);
  const [transportLength, setTransportLength] = useState([60, 210]);
  const [weight, setWeight] = useState([80, 900]);
  const [maxLureweight, setMaxLureWeight] = useState([2, 275]);
  const [sectionsNumber, setSectionsNumber] = useState([
    "1",
    "1+1",
    "2",
    "2+2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);
  const [tmpProducent, setTmpProducent] = useState(["A", "B", "C", "D", "E"]);

  const [producent, setProducent] = useState([]);
  const [discount, setDiscount] = useState(false);

  const onProducentChange = (e) => {
    let selectedProducent = [...producent];
    if (e.checked) selectedProducent.push(e.value);
    else selectedProducent.splice(selectedProducent.indexOf(e.value), 1);
    setProducent(selectedProducent);
  };

  return (
    <div className="product-filter-container">
      <div className="product-filter-label">Filtruj - {category}</div>
      <div className="product-filter-price">
        <div className="price-filter-label">Cena</div>
        <Slider
          value={value}
          onChange={(e) => setValue(e.value)}
          range
          max="10000"
        />
        <div className="prices-range">
          {value[0]} zł - {value[1]} zł
        </div>
      </div>
      <div className="border"></div>
      <div className="producent-filter">
        <div className="producent-filter-label">Producent</div>
        {tmpProducent.map((value, index) => (
          <div className="producent-checkboxes">
            <Checkbox
              className="producent-checkbox"
              inputId={index}
              key={index}
              value={value}
              onChange={onProducentChange}
              checked={producent.includes(value)}
            ></Checkbox>
            <label htmlFor={index}>{value}</label>
          </div>
        ))}
      </div>
      <div className="border"></div>
      <div className="discount-filter">
        <div className="discount-filter-label">Promocja</div>
        <div className="discount-checkboxes">
          <Checkbox
            className="discount-checkbox"
            inputId="discount"
            value="true"
            onChange={() => setDiscount(!discount)}
            checked={discount}
          ></Checkbox>
          <label htmlFor="discount">Tak</label>
        </div>
      </div>
      <div className="border"></div>
      <div className="length-filter">
        <div className="length-filter-label">Długość</div>
        <Slider
          value={length}
          onChange={(e) => setLength(e.value)}
          range
          min="40"
          max="800"
        />
        <div className="length-range">
          {length[0]} cm - {length[1]} cm
        </div>
      </div>
      <div className="border"></div>
      <div className="transport-length-filter">
        <div className="transport-length-filter-label">
          Długość transportowa
        </div>
        <Slider
          value={transportLength}
          onChange={(e) => setTransportLength(e.value)}
          range
          min="50"
          max="220"
        />
        <div className="transport-length-range">
          {transportLength[0]} cm - {transportLength[1]} cm
        </div>
      </div>
      <div className="border"></div>
      <div className="sections-filter">
        <div className="sections-filter-label">Producent</div>
        {sectionsNumber.map((value, index) => (
          <div className="sections-checkboxes">
            <Checkbox
              className="sections-checkbox"
              inputId={index}
              key={index}
              value={value}
              onChange={onProducentChange}
              checked={producent.includes(value)}
            ></Checkbox>
            <label htmlFor={index}>{value}</label>
          </div>
        ))}
      </div>
      <div className="border"></div>
      <div className="weight-filter">
        <div className="weight-filter-label">Waga</div>
        <Slider
          value={weight}
          onChange={(e) => setWeight(e.value)}
          range
          min="50"
          max="1300"
        />
        <div className="weight-range">
          {weight[0]} g - {weight[1]} g
        </div>
      </div>
      <div className="border"></div>
      <div className="max-lure-weight-filter">
        <div className="max-lure-weight-filter-label">Max ciężar wyrzutowy</div>
        <Slider
          value={maxLureweight}
          onChange={(e) => setMaxLureWeight(e.value)}
          range
          min="1"
          max="280"
        />
        <div className="max-lure-weight-range">
          {maxLureweight[0]} g - {maxLureweight[1]} g
        </div>
      </div>
      <div className="filter-button">
        <Button label="Filtruj" className="p-button-raised p-button-success" />
      </div>
    </div>
  );
};

export default ProductFilter;
