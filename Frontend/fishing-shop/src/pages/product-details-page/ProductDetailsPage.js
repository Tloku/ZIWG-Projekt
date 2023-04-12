import ProductDetailsTabView from "../../components/product-details-tab-view/ProductDetailsTabView";
import ProductDetails from "../../components/product-details/ProductDetails";
import ProductSendNotification from "../../components/product-send-notification/ProductSendNotification";

const ProduuctDetailsPage = () => {
  return (
    <div className="product-details-page-component">
      <ProductDetails productName={"Wedka kox 123"} />
      <ProductSendNotification />
      <ProductDetailsTabView />
    </div>
  );
};

export default ProduuctDetailsPage;
