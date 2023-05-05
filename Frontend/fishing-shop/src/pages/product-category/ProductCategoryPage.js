import React from "react";
import { Link } from "react-router-dom";
import './ProductCategoryPage.css';

const categories = [
    { id: 1, name: "Woblery", slug: "woblery" },
    { id: 2, name: "Przynęty", slug: "przynety" },
    { id: 3, name: "Haczyki", slug: "haczyki" },
    { id: 4, name: "Kołowrotki", slug: "kolowrotki" },
    { id: 5, name: "Wędki", slug: "wedki" },
    { id: 6, name: "Linki i plecionki", slug: "linki-i-plecionki" },
    { id: 7, name: "Pudełka i pokrowce", slug: "pudelka-i-pokrowce" },
    { id: 8, name: "Akcesoria wędkarskie", slug: "akcesoria-wedkarskie" },
    { id: 9, name: "Odzież wędkarska", slug: "odziez-wedkarska" },
    { id: 10, name: "Elektronika wędkarska", slug: "elektronika-wedkarska" },
  ];
  

const ProductCategoryPage = () => {
  return (
    <div>
      <h1>Kategorie produktów</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/products/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryPage;