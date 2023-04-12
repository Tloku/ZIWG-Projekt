import "../show-compared-products-button/ShowComparedProductsButton.css";

const ShowComparedProductsButton = ({ comparedProducts }) => {
  comparedProducts = [1, 2];

  return (
    <div className="show-compared-products-button-container">
      <div className="show-compared-products-quantity">
        {comparedProducts.length}
      </div>
      <div className="show-compared-products-button-image">
        <span className="material-symbols-outlined">difference</span>
      </div>
    </div>
  );
};

export default ShowComparedProductsButton;
