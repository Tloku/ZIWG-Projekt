import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8180/",
  realm: "react-shop",
  clientId: "react-client",
});

export default keycloak;
