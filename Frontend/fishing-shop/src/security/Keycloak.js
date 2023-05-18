import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8180/",
  realm: "react-shop",
  clientId: "react-client",
  credentials: {
    secret: "VYaWrEUBhxZLItbDTy634M9GeAqVr6iN",
  },
});

export default keycloak;
