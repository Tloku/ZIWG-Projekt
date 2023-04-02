import "../main-page/MainPage.css";
import Product from "../../components/product/Product";
import AdsCarousel from "../../components/adsCarousel/AdsCarousel"
function MainPage() {
    let price = "2137.00zł";
  
    return (
        <div>
            <div className="page">
                <Product price={price} />
            </div>
            <div className="carousel-container">
                <AdsCarousel />
            </div>
        </div>
        
         
    );
  }

export default MainPage;