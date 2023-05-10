// import "../main-page/MainPage.css";
import Product from "../../components/product/Product";
import AdsCarousel from "../../components/adsCarousel/adsCarousel";
import NewProducts from "../../components/newProducts/NewProducts";
import BestSeller from "../../components/bestSellser/BestSeller";
import Topics from "../../components/topics/Topics";

function MainPage() {
  let price = "2137.00";

  return (
    <div>
      <div>
        <BestSeller />
      </div>
      <div className="page">
        <Product price={price} />
      </div>
      <div className="carousel-container">
        <AdsCarousel />
      </div>
      <div>
        <NewProducts />
      </div>
      <div>
        <Topics />
      </div>
    </div>
  );
}

export default MainPage;
