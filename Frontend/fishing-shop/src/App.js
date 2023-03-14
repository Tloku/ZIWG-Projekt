import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  let price = "2137.00";

  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Product price={price} />}></Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
