import "../client-order-data-form/ClientOrderDataForm.css";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderUUIDNotUniqueMessage from "../messages/OrderUUIDNotUniqueMessage";
import axios from "axios";
import { Toast } from "primereact/toast";
import { removeAllProducts } from "../../stores/ProductReducer";
import { removeUUID } from "../../stores/CustomerOrderUUIDReducer";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

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
  const toast = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const createCustomerOrder = () => {
    if (keycloak && !keycloak.authenticated) {
      showMessage(
        toast,
        "error",
        "Zaloguj się!",
        "Musisz być zalogowany, żeby móc złożyć zamówienie"
      );
      return;
    }

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
    callCreateCustomerOrder(order, toast, dispatch, navigate, keycloak);
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
      <Toast ref={toast} position="top-center" />
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

const callCreateCustomerOrder = async (
  CreateCustomerOrderRequest,
  toast,
  dispatch,
  navigate,
  keycloak
) => {
  let data, error, loaded;
  const url = "http://localhost:8081/api/customer_order/authorize/create";
  
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `bearer ${keycloak.token}`,
  };

  try {
    const response = await axios.post(url, CreateCustomerOrderRequest, {
      headers
    });

    data = response.data;
    if (data && data.id) {
      showMessage(
        toast,
        "success",
        "Twoje zamówienie zostało stworzone!",
        "Odpręż się, kurier już niedługo wyruszy z twoją paczką"
      );
      setTimeout(() => {
        clearProductsAndUUIDData(dispatch);
        navigate("/"); //TODO nawigowanie do strony "twoje zamówienia"
      }, 3500);
    }
  } catch (error) {
    error = error.message;
  } finally {
    loaded = true;
  }
  return { data, error, loaded };
};

const showMessage = (toast, severity, summary, detail) => {
  toast.current.show({
    severity: severity,
    summary: summary,
    detail: detail,
    life: 3000,
  });
};

const clearProductsAndUUIDData = (dispatch) => {
  dispatch(removeAllProducts());
  dispatch(removeUUID());
};
