import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NavDropdown, NavLink } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";


const Navbar = () => {

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


  return (
    <nav >
      <ul>
        <li> <Link to="/" style={{ width: "100%", height: "100%", display: 'inline-block', textDecoration: "none", color: "white" }}>Strona główna</Link>
        </li>
        <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <NavDropdown title="Produkt" id="basic-nav-dropdown" style={{ color: "white", margin: "center", position: "relative", textAlign: "center", padding: "relative", display: "block" }} show={open} /*onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}*/>
            {categories.map((categories) =>
              <NavDropdown.Item key={categories.id}>
                <Link to={"products/" + categories.name} style={{ width: "100%", height: "100%", display: 'inline-block', color: "black", textDecoration: "none" }}>
                  {categories.name}
                </Link>
              </NavDropdown.Item>
            )}
          </NavDropdown></li>
        <li>
          <Dropdown value={categories} onChange={(e) => setSelectedCategories(e.value)} options={categories} optionLabel="name"
            placeholder="Select a Category" className="w-full md:w-14rem" />
        </li>
        <li><Link to="/news" style={{ width: "100%", height: "100%", display: 'inline-block', color: "white", textDecoration: "none" }}>Aktualności</Link></li>
        <li> <Link to="/help" style={{ width: "100%", height: "100%", display: 'inline-block', color: "white", textDecoration: "none" }}>Pomoc</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
