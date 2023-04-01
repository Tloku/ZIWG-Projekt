import "../searchbar/searchbar.css";
import { InputText } from "primereact/inputtext";

const Searchbar = () => {
  return (
    <div className="searchbar-content">
      <div className="searchbar-logo-img">
        <img
          className="searchbar-logo"
          src={require("../../assets/logo.png")}
          alt="logo"
        />
      </div>
      <div className="searchbar-cart-img">
        <span class="material-symbols-outlined">shopping_cart</span>
      </div>
      <div className="searchbar-account-img">
        <span class="material-symbols-outlined">person</span>
      </div>
      <div className="searchbar-input">
        <span className="p-input-icon-left">
          <i className="search-icon material-symbols-outlined">phishing</i>
          <InputText
            className="searchbar-text-input"
            style={{ width: "100%" }}
            type="text"
            placeholder="Wyszukaj produkt..."
          />
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
