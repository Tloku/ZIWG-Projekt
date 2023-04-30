import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './UserProfilPage.css';

function UserProfilePage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Wysłanie formularza na serwer
    console.log('Form submitted: ', user);
  };

  useEffect(() => {
    // TODO: Pobranie ulubionych produktów z serwera
    axios.get('/api/favorite-products').then((response) => {
      setFavoriteProducts(response.data);
    });
  }, []);

  return (
    <div className="user-profile-page">
      <h1 className="title">User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button className="save-button" type="submit">
          Save
        </button>
      </form>
      <hr />
      <h2 className="subtitle">Favorite Products</h2>
      <ul className="product-list">
        {favoriteProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfilePage;