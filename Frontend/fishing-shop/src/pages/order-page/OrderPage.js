import "../order-page/OrderPage.css";
import ClientOrderDataForm from "../../components/client-order-data-form/ClientOrderDataForm";

const OrderPage = () => {
  return (
    <div className="order-page-container">
      <div className="order-page-client-data">
        <ClientOrderDataForm />
      </div>
    </div>
  );
};

export default OrderPage;
