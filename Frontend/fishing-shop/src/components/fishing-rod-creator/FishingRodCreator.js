import React, { useState } from "react";
import "./fishingRodCreator.css";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import example_wedka from "../../assets/example-fishing-rod.png";
import constructor_image from "../../assets/wedka_constructor.png";
import haczek from "../../assets/haczek.png";
import kolowrotka from "../../assets/kolowrotka.png";
import linka from "../../assets/linka.png";
import splawik from "../../assets/splawik.png";
import wedka from "../../assets/wedka.png";
import useAxiosPost from "../../hooks/useAxiosPost";

function FishingRodCreator() {
  const [wedkaClicked, setWedkaClicked] = useState("hidden");
  const [linkaClicked, setLinkaClicked] = useState("hidden");
  const [haczekClicked, setHaczekClicked] = useState("hidden");
  const [kolowrotkaClicked, setKolowrotkaClicked] = useState("hidden");
  const [splawikClicked, setSplawikClicked] = useState("hidden");

  const backendUrl = process.env.BACKEND_URL;
  const url = `http://localhost:8081/api/product/fishing_rod_creator`;

  const { wedki, wedkiError, wedkiLoaded } = useAxiosPost(url, {
    categoryName: "FISHING_ROD",
  });

  // const { linki, linkiError, linkiLoaded } = useAxiosPost(
  //   "http://localhost:8081/api/product/fishing_rod_creator",
  //   {categoryName: "FISHING_ROD"}
  // );

  const { haczki, haczkiError, haczkiLoaded } = useAxiosPost(url, {
    categoryName: "HOOK",
  });

  const { kolowrotki, kolowrotkiError, kolowrotkiLoaded } = useAxiosPost(url, {
    categoryName: "REEL",
  });

  const { splawiki, splawikiError, splawikiLoaded } = useAxiosPost(url, {
    categoryName: "BAIT",
  });

  const addWedka = (name) => {
    setWedkaClicked("visible");
  };

  const addLinka = (name) => {
    setLinkaClicked("visible");
  };

  const addHaczek = (name) => {
    setHaczekClicked("visible");
  };

  const addKolowrotka = (name) => {
    setKolowrotkaClicked("visible");
  };

  const addSplawik = (name) => {
    setSplawikClicked("visible");
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div>
        <img src={props.image}></img>
        <div>
          <p>Name : {props.name}</p>
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
                {wedki && wedki.productsDisplayInformation ? (
                  wedki.productsDisplayInformation.map((item, index) => {
                    return (
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip({
                          image: item.image,
                          name: item.name,
                        })}
                      >
                        <Dropdown.Item
                          className="option-item"
                          href="#/action-1"
                          key={index}
                          onClick={() => {
                            addWedka(item.name);
                          }}
                        >
                          {item.name}
                        </Dropdown.Item>
                      </OverlayTrigger>
                    );
                  })
                ) : (
                  <div className="product-list-page-loading">Ładowanie...</div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <Dropdown className="category">
              <Dropdown.Toggle className="dropdown-button">
                Haczki
              </Dropdown.Toggle>
              <Dropdown.Menu className="option-list">
                {haczki && haczki.productsDisplayInformation ? (
                  haczki.productsDisplayInformation.map((item, index) => {
                    return (
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip({
                          image: item.image,
                          name: item.name,
                        })}
                      >
                        <Dropdown.Item
                          className="option-item"
                          href="#/action-1"
                          key={index}
                          onClick={() => {
                            addHaczek(item.name);
                          }}
                        >
                          {item.name}
                        </Dropdown.Item>
                      </OverlayTrigger>
                    );
                  })
                ) : (
                  <div className="product-list-page-loading">Ładowanie...</div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <Dropdown className="category">
              <Dropdown.Toggle className="dropdown-button">
                Kolowrotki
              </Dropdown.Toggle>
              <Dropdown.Menu className="option-list">
                {kolowrotki && kolowrotki.productsDisplayInformation ? (
                  kolowrotki.productsDisplayInformation.map((item, index) => {
                    return (
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip({
                          image: item.image,
                          name: item.name,
                        })}
                      >
                        <Dropdown.Item
                          className="option-item"
                          href="#/action-1"
                          key={index}
                          onClick={() => {
                            addKolowrotka(item.name);
                          }}
                        >
                          {item.name}
                        </Dropdown.Item>
                      </OverlayTrigger>
                    );
                  })
                ) : (
                  <div className="product-list-page-loading">Ładowanie...</div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <Dropdown className="category">
              <Dropdown.Toggle className="dropdown-button">
                Splawiki
              </Dropdown.Toggle>
              <Dropdown.Menu className="option-list">
                {splawiki && splawiki.productsDisplayInformation ? (
                  splawiki.productsDisplayInformation.map((item, index) => {
                    return (
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip({
                          image: item.image,
                          name: item.name,
                        })}
                      >
                        <Dropdown.Item
                          className="option-item"
                          href="#/action-1"
                          key={index}
                          onClick={() => {
                            addSplawik(item.name);
                          }}
                        >
                          {item.name}
                        </Dropdown.Item>
                      </OverlayTrigger>
                    );
                  })
                ) : (
                  <div className="product-list-page-loading">Ładowanie...</div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </div>
        <div className="LeftBlock">
          <li>
            <Dropdown className="category">
              <Dropdown.Toggle className="dropdown-button">
                Linki
              </Dropdown.Toggle>

              <Dropdown.Menu className="option-list">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip({
                    image: example_wedka,
                    name: "Dragon Millenium Okoń",
                  })}
                >
                  <Dropdown.Item
                    className="option-item"
                    href="#/action-1"
                    onClick={() => {
                      addLinka("Linka Dragon Millenium Okoń");
                    }}
                  >
                    Dragon Millenium Okoń
                  </Dropdown.Item>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip({
                    image: example_wedka,
                    name: "Dragon Millenium Szczupak",
                  })}
                >
                  <Dropdown.Item
                    className="option-item"
                    href="#/action-2"
                    onClick={() => {
                      addLinka("Linka Dragon Millenium Szczupak");
                    }}
                  >
                    Dragon Millenium Szczupak
                  </Dropdown.Item>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip({
                    image: example_wedka,
                    name: "Jaxon Crocodile Spinning",
                  })}
                >
                  <Dropdown.Item
                    className="option-item"
                    href="#/action-3"
                    onClick={() => {
                      addLinka("Linka Jaxon Crocodile Spinning");
                    }}
                  >
                    Jaxon Crocodile Spinning
                  </Dropdown.Item>
                </OverlayTrigger>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </div>
        <div className="CenterBlock">
          <img
            className="CenterBlock_image"
            src={constructor_image}
            alt="img"
          ></img>
          <img
            className="Wedka"
            style={{ visibility: wedkaClicked }}
            src={wedka}
            alt="img"
          ></img>
          <img
            className="Haczek"
            src={haczek}
            style={{ visibility: haczekClicked }}
            alt="img"
          ></img>
          <img
            className="Kolowrotka"
            src={kolowrotka}
            style={{ visibility: kolowrotkaClicked }}
            alt="img"
          ></img>
          <img
            className="Splawik"
            src={splawik}
            style={{ visibility: splawikClicked }}
            alt="img"
          ></img>
          <img
            className="Linka"
            src={linka}
            style={{ visibility: linkaClicked }}
            alt="img"
          ></img>
        </div>
        <div className="RightBlock">
          <h3>Info</h3>
          <p>Parametry : </p>
          <div className="button" onClick={{}}>
            DO KOSZYKA
          </div>
        </div>
      </div>
    </div>
  );
}

export default FishingRodCreator;
