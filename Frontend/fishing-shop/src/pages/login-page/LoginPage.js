import "../login-page/LoginPage.css";
import { useKeycloak } from "@react-keycloak/web";

const LoginPage = () => {
  const { keycloak } = useKeycloak();
  console.log(keycloak);
  return <div>ELO</div>;
};

export default LoginPage;
