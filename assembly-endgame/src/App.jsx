import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Language from "./components/Language";
import { languages } from "./languages";

function App() {
  const [currentWord, SetCurrentWord] = useState("react");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  const languageElements = languages.map((language) => (
    <Language language={language} key={language.name} />
  ));

  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const keyboardElements = alphabet.split("").map((letter) => (
    <button key={letter} onClick={() => addGuessedLetter(letter)}>
      {letter.toUpperCase()}
    </button>
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
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;
