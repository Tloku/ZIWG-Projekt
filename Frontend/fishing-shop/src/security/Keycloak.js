import Keycloak from "keycloak-js";

const keycloakUrl = process.env.KEYCLOAK_URL;

const keycloak = new Keycloak({
  url: `${keycloakUrl}/`,
  realm: "react-shop",
  clientId: "react-client",
});

export default keycloak;
