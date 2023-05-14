import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { Provider } from "react-redux";
import store from "./stores/store";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./security/Keycloak";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactKeycloakProvider
    // initOptions={{ onLoad: "login-required" }}
    authClient={keycloak}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <LoginPage /> */}
      </BrowserRouter>
    </Provider>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
