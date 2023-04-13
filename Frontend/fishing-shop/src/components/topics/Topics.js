import "./topics.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import image from "../../assets/art-1.png";
import Offcanvas from "react-bootstrap/Offcanvas";

function Topics() {
  let price = "2137.00zł";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <p className="section-title">Artykuły</p>
      <div className="card-container">
        <Card className="card">
          <Card.Img variant="top" src={image} className="card-image" />
          <Card.Body>
            <Card.Title>Zbliża się sezon: uzupełnij przypony</Card.Title>
            <Card.Text>
              Ostatnio pisaliśmy o sprawdzonych wędkach na kropki – dziś pora na
              pstrągowo-kleniowe kołowrotki. Wszystkie poniższe modele zostały
              przez nas przetestowane i możemy z czystym sumieniem przyznać im
              znak jakości ekipy
            </Card.Text>
            <div className="button-container">
              <div className="button" onClick={handleShow}>
                Czytaj więcej
              </div>
            </div>
          </Card.Body>
        </Card>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Zbliża się sezon: uzupełnij przypony</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Masz już dość chłodnych, śnieżno-deszczowych wieczorów? Jeśli tak
            jak my, nie możesz doczekać się sezonu, zajmij się przygotowaniami
            do wiosny. Zachęcaliśmy już do wymiany plecionki i gruntownego
            przeglądu przynęt - dziś zajmiemy się przyponami. Żeby łowienie
            drapieżników miało sens, potrzebne są mocne przypony. Przykładowo -
            szczupaki są na tyle waleczne, że potrafią obciąć linkę i zerwać
            zestaw, a gdy wpadną w szał, mogą nawet uszkodzić zębami nasze
            palce. Na szczęście takich problemów da się łatwo uniknąć; wystarczy
            mieć pod ręką przypony o podwyższonej odporności na uszkodzenia.
            Gotowe przypony można oczywiście zakupić w naszym sklepie. Biorąc
            jednak pod uwagę, że do startu sezonu zostało jeszcze trochę czasu,
            można też wykonać je samodzielnie przy użyciu Regeneratora marki
            Savage Gear. Ten specjalny, polimerowy materiał jest wyjątkowo
            odporny na uszkodzenia, nie skręca się i praktycznie nie widać go w
            wodzie. Dzięki temu na przypon powstały z Regeneratora da się łowić
            nawet przez dwa pełne sezony. Po przydatne wskazówki DIY zapraszamy
            na nasz kanał na YouTubie. Z tego filmu dowiecie się m.in. jaką
            średnicę wybrać, jak zamontować krętlik oraz ilu tulejek użyć. Do
            roboty!
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Topics;
