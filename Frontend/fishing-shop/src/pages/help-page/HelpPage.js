import React, { useState } from "react";
import "./HelpPage.css";

const HelpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Problem: ${problem}`);
    setName("");
    setEmail("");
    setProblem("");
  };

  return (
    <div className="help-page">
      <h1 align="center" style={{margin: "20px 0"}}>Pomoc</h1>
      <div className="contact-info">
        <h2>Kontakt</h2>
        <p>
          Masz jakieś pytania lub problemy? Skontaktuj się z nami poprzez
          e-mail lub formularz poniżej.
        </p>
        <ul>
          <li>
            <strong>E-mail:</strong> <a href="mailto:pomoc@przyklad.com">pomoc@przyklad.com</a>
          </li>
          <li>
            <strong>Adres:</strong> ul. Przykładowa 1, 00-000 Warszawa
          </li>
        </ul>
      </div>
      <div className="problem-form">
        <h2>Zgłoś problem</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="problem">Opis problemu:</label>
            <textarea
              id="problem"
              value={problem}
              onChange={handleProblemChange}
            />
          </div>
          <button type="submit">Wyślij zgłoszenie</button>
        </form>
      </div>
    </div>
  );
};

export default HelpPage;