import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import ProductListPage from "./pages/product-list-page/ProductListPage";
import MainPage from "./pages/main-page/MainPage";
import CartPage from "./pages/cart-page/CartPage";
import OrderPage from "./pages/order-page/OrderPage";
import ProduuctDetailsPage from "./pages/product-details-page/ProductDetailsPage";
import FishingRodCreator from "./components/fishing-rod-creator/FishingRodCreator";
import NotFound from "./pages/NotFound";
import UserProfilePage from "./pages/user-page/UserProfilPage";
import ProductCategoryPage from "./pages/product-category/ProductCategoryPage";
import HelpPage from "./pages/help-page/HelpPage";
import NewsPage from "./pages/newsPage/NewsPage";
import LoginPage from "./pages/login-page/LoginPage";

function App() {
  return (
    <div className="App">
      <div className="navbar-content">
        <Searchbar />
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/products/:category"
            element={<ProductListPage />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route
            path="/order-finalization/:uuid"
            element={<OrderPage />}
          ></Route>
          <Route
            path="/fishing-rod-creator"
            element={<FishingRodCreator />}
          ></Route>
          <Route
            path="/product-details/:id"
            element={<ProduuctDetailsPage />}
          ></Route>
          <Route path="/user-profil" element={<UserProfilePage />}></Route>
          <Route path="/products" element={<ProductCategoryPage />}></Route>
          <Route path="/help" element={<HelpPage />}>
            {" "}
          </Route>
          <Route path="/news" element={<NewsPage />}>
            {" "}
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
