import styles from "../product-details-tab-view/ProductDetailsTabView.css";
import { TabView, TabPanel } from "primereact/tabview";

const ProductDetailsTabView = () => {
  const productDescriptionTabTemplate = (options) => {
    return (
      <div
        className="product-details-tab-panel-description"
        onClick={options.onClick}
      >
        Opis
      </div>
    );
  };

  const productDetailsTabTemplate = (options) => {
    return (
      <div
        className="product-details-tab-panel-details"
        onClick={options.onClick}
      >
        Szczegóły
      </div>
    );
  };

  return (
    <div className="product-details-tab-view-container">
      <TabView className="product-details-tab-view">
        <TabPanel headerTemplate={productDescriptionTabTemplate}>
          SADFASDF
        </TabPanel>
        <TabPanel headerTemplate={productDetailsTabTemplate}></TabPanel>
      </TabView>
    </div>
  );
};

export default ProductDetailsTabView;
