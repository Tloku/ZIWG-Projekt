import "../searchbar/Searchbar.css";
import { InputText } from "primereact/inputtext";
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <div className="searchbar-content">
      <div className="searchbar-logo-img">
        <Link to="/">
        <img
          className="searchbar-logo"
          src={require("../../assets/logo.gif")}
          alt="logo"
        /></Link>
      </div>
      <Link to="/cart">
      <div className="searchbar-cart-img">
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
      </Link>
      <Link to = "/user-profil">
      <div className="searchbar-account-img">
        <span className="material-symbols-outlined">person</span>
      </div>
      </Link>
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
