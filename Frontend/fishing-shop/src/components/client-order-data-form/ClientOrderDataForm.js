import "../client-order-data-form/ClientOrderDataForm.css";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderUUIDNotUniqueMessage from "../messages/OrderUUIDNotUniqueMessage";
import axios from "axios";

const ClientOrderDataForm = () => {
  const [isPrivatePerson, setIsPrivatePerson] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [statuteAccepted, setStatueAccepted] = useState(false);
  const [emailNewsletter, setEmailNewsletter] = useState(false);
  const [smsNewsletter, setSmsNewsletter] = useState(false);
  const products = useSelector((state) => state.products);
  const uuid = useSelector((state) => state.uuid);
  const [order, setOrder] = useState(null);

  const createCustomerOrder = () => {
    const customer = gatherUserDataToObject();
    setOrder({
      customer: customer,
      uuid: uuid,
      products: products,
    });
  };

  useEffect(() => {
    if (order === null) {
      return;
    }
    callCreateCustomerOrder(order);
  }, [order]);

  const gatherUserDataToObject = () => {
    return {
      isPrivatePerson: isPrivatePerson,
      name: name,
      lastName: lastName,
      address: address,
      postalCode: postalCode,
      phoneNumber: phoneNumber,
      city: city,
      email: email,
      country: country,
      statuteAccepted: statuteAccepted,
      emailNewsletter: emailNewsletter,
      smsNewsletter: smsNewsletter,
    };
  };

  if (uuid === "" || uuid === undefined) {
    return <OrderUUIDNotUniqueMessage />;
  }
  return (
    <div className="client-order-data-form-container">
      <div className="client-order-data-form-header">
        <div className="client-order-data-form-header-label">Twoje dane</div>
      </div>
      <form className="formik-container">
        <div className="client-order-data-inputs-container">
          <div className="client-order-data-input-row">
            <RadioButton
              inputId="person"
              name="person"
              value={isPrivatePerson}
              onChange={(e) => setIsPrivatePerson(e.value)}
              checked={isPrivatePerson}
            />
            <label htmlFor="person">Osoba prywatna</label>
            <RadioButton
              inputId="company"
              name="company"
              value={isPrivatePerson}
              onChange={(e) => setIsPrivatePerson(!e.value)}
              checked={!isPrivatePerson}
            />
            <label htmlFor="company">Firma</label>
          </div>
          <div className="client-order-data-input-row">
            <span className="p-float-label client-order-data-name">
              <InputText
                id="name"
                value={name}
                style={{ width: "90%" }}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">Imię</label>
            </span>
            <span className="p-float-label client-order-data-last-name">
              <InputText
                id="last-name"
                value={lastName}
                style={{ width: "90%" }}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="last-name">Nazwisko</label>
            </span>
          </div>
          <div className="client-order-data-input-row ">
            <span className="p-float-label client-order-data-address">
              <InputText
                id="address"
                value={address}
                className="full-width-input"
                style={{ width: "100%" }}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="address">Ulica i numer</label>
            </span>
          </div>
          <div className="client-order-data-input-row">
            <span className="p-float-label client-order-data-postal-code">
              <InputText
                id="postal-code"
                value={postalCode}
                style={{ width: "90%" }}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <label htmlFor="postal-code">Kod pocztowy</label>
            </span>
            <span className="p-float-label client-order-data-city">
              <InputText
                id="city"
                value={city}
                style={{ width: "90%" }}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="city">Miasto</label>
            </span>
          </div>
          <div className="client-order-data-input-row">
            <span className="p-float-label client-order-data-country">
              <InputText
                id="country"
                value={country}
                className="full-width-input"
                style={{ width: "100%" }}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label htmlFor="country">Kraj</label>
            </span>
          </div>
          <div className="client-order-data-input-row">
            <span className="p-float-label client-order-data-phone-number">
              <InputText
                id="phone-number"
                value={phoneNumber}
                style={{ width: "90%" }}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="phone-number">Numer telefonu</label>
            </span>
            <span className="p-float-label client-order-data-email">
              <InputText
                id="email"
                type="email"
                value={email}
                style={{ width: "90%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </span>
          </div>
          <div className="client-order-data-input-row">
            <Checkbox
              inputId="statute"
              name="statute"
              value={statuteAccepted}
              onChange={(e) => setStatueAccepted(!e.target.value)}
              checked={statuteAccepted === true}
            />
            <label htmlFor="statute">*Akceptuje warunki regulaminu</label>
          </div>
          <div className="client-order-data-input-row">
            <Checkbox
              inputId="emailNewsletter"
              name="emailNewsletter"
              value={emailNewsletter}
              onChange={(e) => setEmailNewsletter(!e.target.value)}
              checked={emailNewsletter === true}
            />
            <label htmlFor="emailNewsletter">
              Chcę otrzymywać email newsletter
            </label>
          </div>
          <div className="client-order-data-input-row">
            <Checkbox
              inputId="smsNewsletter"
              name="smsNewsletter"
              value={smsNewsletter}
              onChange={(e) => setSmsNewsletter(!e.target.value)}
              checked={smsNewsletter === true}
            />
            <label htmlFor="smsNewsletter">
              Chcę otrzymywać SMS newsletter
            </label>
          </div>

          <button
            className="client-order-button"
            type="button"
            onClick={() => createCustomerOrder()}
          >
            Złóż zamówienie
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientOrderDataForm;

const callCreateCustomerOrder = (CreateCustomerOrderRequest) => {
  let data, error, loaded;
  const url = "http://localhost:8081/api/customer_order/create";

  try {
    const response = axios.post(url, CreateCustomerOrderRequest, {
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });

    data = response.data;
  } catch (error) {
    error = error.message;
  } finally {
    loaded = true;
  }
  return { data, error, loaded };
};
