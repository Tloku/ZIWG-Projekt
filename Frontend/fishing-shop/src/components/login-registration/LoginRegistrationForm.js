import "../login-registration/LoginRegistrationForm.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useKeycloak } from "@react-keycloak/web";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const { keycloak } = useKeycloak();

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  };
  const handleShow = () => setShow(true);

  const [justifyActive, setJustifyActive] = useState("login");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setValidated(false);
    setJustifyActive(value);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    // const form = event.currentTarget;
    // console.log(event.target);
    // if (form.checkValidity() === false) {
    // event.preventDefault();
    // event.stopPropagation();
    // }

    // setValidated(true);

    try {
      await keycloak.login();
    } catch (error) {
      console.error("Failed to log in", error);
    }
  };

  return (
    <div>
      <div className="account-img" onClick={handleShow}>
        <span className="material-symbols-outlined">person</span>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span
              className="tab"
              onClick={() => handleJustifyClick("login")}
              active={justifyActive === "login"}
            >
              Login
            </span>
            <span
              className="tab"
              onClick={() => handleJustifyClick("register")}
              active={justifyActive === "register"}
            >
              Register
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body hidden={justifyActive != "login"}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control required type="password" placeholder="Password" />
            </FloatingLabel>
            <Button
              type="button"
              onClick={() => handleSubmit()}
              className="form-button"
            >
              Zaloguj
            </Button>
          </Form>
        </Offcanvas.Body>
        {/* <Offcanvas.Body hidden={justifyActive != "register"}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingName"
              label="Name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPhone"
              label="Mobile Phone"
              className="mb-3"
            >
              <Form.Control required type="phone" placeholder="+48xxxxxxxxx" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control required type="password" placeholder="Password" />
            </FloatingLabel>

            <Button type="button" className="form-button">
              Zarejestruj
            </Button>
          </Form>
        </Offcanvas.Body> */}
      </Offcanvas>
    </div>
  );
}
export default OffCanvasExample;
