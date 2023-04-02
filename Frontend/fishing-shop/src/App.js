import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import Searchbar from "./components/searchbar/Searchbar";
import ProductListPage from "./pages/product-list-page/ProductListPage";
import CartPage from "./pages/cart-page/CartPage";
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
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
