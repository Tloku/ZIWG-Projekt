import React, { useState } from "react";
import "./constructor.css";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import image from "../../assets/example-fishing-rod.png";
import constructor_image from "../../assets/wedka_constructor.png";
import haczek from "../../assets/haczek.png";
import kolowrotka from "../../assets/kolowrotka.png";
import linka from "../../assets/linka.png";
import splawik from "../../assets/splawik.png";
import wedka from "../../assets/wedka.png";
function Constructor() {
  const [wedkaClicked, setWedkaClicked] = useState("hidden");

  const addWedka = (name) => {
    setWedkaClicked("visible");
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div>
        <img src={image}></img>
        <div>
          <p>Properties : </p>
        </div>
      </div>
    </Tooltip>
  );

  return (
    <div>
      <div className="Box">
        <div className="LeftBlock">
          <li>
            <Dropdown className="category">
              <Dropdown.Toggle className="dropdown-button">
                Wędki
              </Dropdown.Toggle>

              <Dropdown.Menu className="option-list">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Dropdown.Item
                    className="option-item"
                    href="#/action-1"
                    onClick={() => {
                      addWedka("Jaxon Tenesa Easy Spin");
                    }}
                  >
                    Jaxon Tenesa Easy Spin
                  </Dropdown.Item>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Dropdown.Item
                    className="option-item"
                    href="#/action-2"
                    onClick={() => {
                      addWedka("Jaxon Grey Stream");
                    }}
                  >
                    Jaxon Grey Stream
                  </Dropdown.Item>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Dropdown.Item
                    className="option-item"
                    href="#/action-3"
                    onClick={() => {
                      addWedka("Tenesa Spinning Jaxon");
                    }}
                  >
                    Tenesa Spinning Jaxon
                  </Dropdown.Item>
                </OverlayTrigger>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </div>
        <div className="CenterBlock">
          <img className="CenterBlock_image" src={constructor_image}></img>
          <img
            className="Wedka"
            style={{ visibility: wedkaClicked }}
            src={wedka}
          ></img>
          <img className="Haczek" src={haczek}></img>
          <img className="Kolowrotka" src={kolowrotka}></img>
          <img className="Splawik" src={splawik}></img>
          <img className="Linka" src={linka}></img>
        </div>
        <div className="RightBlock">
          <h3>Info</h3>
          <p>Parametry : </p>
          <div className="button" onClick={{}}>
            DO KOSZYKA
          </div>
        </div>
      </div>
      {/* <div className="Box">
        <div className="LeftBlock">
          <div className="VerticalMenu">{}</div>
        </div>
        <div className="CenterBlock">
          <div className="ComponentImage">{}</div>
        </div>
        <div className="RightBlock">
          <div className="RightBlockInside">
            <div className="VertMenu">{}</div>
            <div className="RightBlockInfo">
              <p className="InfoTitle">
                Total Price: $ {}
              </p>
              <div className="InfoButtonWraper">
                <button
                  className="InfoPriceButton"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Constructor;
