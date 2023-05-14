import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";
import { useNavigate } from "react-router-dom";

const KeycloakResource = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const keycloak = Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenticated(authenticated);
      navigate("/");
      console.log("keycloak", keycloak);
      console.log("authenticated", authenticated);
    });
  }, []);
};

export default KeycloakResource;
