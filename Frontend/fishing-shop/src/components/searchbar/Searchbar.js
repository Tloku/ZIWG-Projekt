import "bootstrap/dist/css/bootstrap.min.css";
import "../searchbar/searchbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasExample from '../../components/login-registration/LoginRegistrationForm'

const Searchbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div className="searchbar-account-img" >
        <OffCanvasExample placement="end" />
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
