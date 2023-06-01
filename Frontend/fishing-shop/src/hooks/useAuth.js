import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

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
