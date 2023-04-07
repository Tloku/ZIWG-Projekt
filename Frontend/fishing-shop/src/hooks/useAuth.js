import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

// const client = new Keycloak({
//   url: process.env.REACT_APP_KEYCLOAK_URL,
//   realm: process.env.REACT_APP_KEYCLOAK_REALM,
//   clientId: process.env.REACT_APP_KEYCLOAK_CLIENT,
// });

const useAuth = () => {
  const [state, setState] = useState({ keycloak: null, authenticated: false });

  useEffect(() => {
    const keycloak = new Keycloak("./keycloak.json");

    keycloak
      .init({ onLoad: "login-required", promiseType: "native" })
      .then((authenticated) => {
        setState({ keycloak: keycloak, authenticated: authenticated });
        if (authenticated) {
          window.accessToken = keycloak.token;
        }
      });
  }, []);

  return state;
};

export default useAuth;
