import "../searchbar/Searchbar.css";
import { InputText } from "primereact/inputtext";

const Searchbar = () => {
  return (
    <div className="searchbar-content">
      <div className="searchbar-logo-img">
        <img
          className="searchbar-logo"
          src={require("../../assets/logo.gif")}
          alt="logo"
        />
      </div>
      <div className="searchbar-cart-img">
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
      <div className="searchbar-account-img">
        <span className="material-symbols-outlined">person</span>
      </div>
      <div className="searchbar-input">
        <span className="p-input-icon-left w-full">
          <i className="search-icon material-symbols-outlined">phishing</i>
          <InputText
            className="searchbar-text-input"
            style={{ width: "calc(30vw + 10vh)" }}
            type="text"
            placeholder="Wyszukaj produkt..."
          />
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
