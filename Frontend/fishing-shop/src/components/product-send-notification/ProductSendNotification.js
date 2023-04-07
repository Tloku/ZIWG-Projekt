import "../product-send-notification/ProductSendNotification.css";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const ProductSendNotification = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="product-send-notification-container">
      <div className="product-send-notification-header">
        <h2>Produkt niedostępny?</h2>
        <p>Powiadom o dostępności!</p>
      </div>
      <div className="product-send-notification-input">
        <span className="p-float-label">
          <InputText
            id="email"
            type={email}
            value={email}
            style={{ width: "90%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </span>
      </div>

      <div className="product-send-notification-button">
        Powiadom mnie o dostępności!
      </div>
    </div>
  );
};

export default ProductSendNotification;
