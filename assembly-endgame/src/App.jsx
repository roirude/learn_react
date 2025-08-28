import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Language from "./components/Language";
import { languages } from "./languages";

function App() {
  const [currentWord, SetCurrentWord] = useState("react");

  const letterElements = currentWord.split("").map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  const languageElements = languages.map((language) => (
    <Language language={language} key={language.name} />
  ));

  return (
    <main>
      <Header />
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
    </main>
  );
}

export default App;
