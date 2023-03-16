import "../searchbar/searchbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
        <ShoppingCartIcon />
      </div>
      <div className="searchbar-account-img">
        <AccountCircleIcon />
      </div>
      <div className="searchbar-input">
        <input
          className="searchbar-text-input"
          type="text"
          placeholder="Wyszukaj produkt..."
        />
      </div>
    </div>
  );
};

export default Searchbar;
