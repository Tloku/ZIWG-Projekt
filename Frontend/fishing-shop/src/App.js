import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import Searchbar from "./components/searchbar/Searchbar";
import ProductListPage from "./pages/product-list-page/ProductListPage";
import CartPage from "./pages/cart-page/CartPage";
import OrderPage from "./pages/order-page/OrderPage";
import ProduuctDetailsPage from "./pages/product-details-page/ProductDetailsPage";

function App() {
  let price = "2137.00zł";

  return (
    <div className="App">
      <div className="navbar-content">
        <Searchbar />
        <Navbar />
      </div>
      <div className="page">
        <Routes>
          <Route path="/" element={<Product price={price} />}></Route>
          <Route
            path="/products/:category"
            element={<ProductListPage />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/order-finalization" element={<OrderPage />}></Route>
          <Route
            path="/product-details/:id"
            element={<ProduuctDetailsPage />}
          ></Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
