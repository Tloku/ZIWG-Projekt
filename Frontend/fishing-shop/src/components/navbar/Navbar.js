import "../navbar/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NavDropdown, NavLink } from "react-bootstrap";
import { useKeycloak } from "@react-keycloak/web";

const Navbar = () => {
  const { keycloak } = useKeycloak();
  const categories = [
    { id: 1, name: "Woblery" },
    { id: 2, name: "Przynęty" },
    { id: 3, name: "Haczyki" },
    { id: 4, name: "Kołowrotki" },
    { id: 5, name: "Wędki" },
    { id: 6, name: "Linki i plecionki" },
    { id: 7, name: "Pudełka i pokrowce" },
    { id: 8, name: "Akcesoria wędkarskie" },
    { id: 9, name: "Odzież wędkarska" },
    { id: 10, name: "Elektronika wędkarska" },
  ];
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      await keycloak.login();
    } catch (error) {
      console.error("Failed to log in", error);
    }
  };

  const logout = () => {
    keycloak.logout();
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="link-style">
            Strona główna
          </Link>
        </li>
        <li
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <NavDropdown
            title="Produkt"
            id="basic-nav-dropdown"
            className="product-dropdown"
            show={
              open
            } /*onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}*/
          >
            {categories.map((categories) => (
              <NavDropdown.Item key={categories.id}>
                <Link
                  to={"products/" + categories.name}
                  className="product-in-dropdown"
                >
                  {categories.name}
                </Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </li>
        <li>
          <Link to="/news" className="link-style">
            Aktualności
          </Link>
        </li>
        <li>
          <Link to="/help" className="link-style">
            Pomoc
          </Link>
        </li>
        <li>
          <Link className="link-style">Zamówienia</Link>
        </li>

        {!keycloak.authenticated ? (
          <li className="login-li" onClick={() => login()}>
            Zaloguj
          </li>
        ) : (
          <li className="login-li" onClick={() => logout()}>
            Wyloguj
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
