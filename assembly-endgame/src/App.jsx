import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Language from "./components/Language";
import { languages } from "./languages";
import clsx from "clsx";

function App() {
  const [currentWord, SetCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languageElements = languages.map((language) => (
    <Language language={language} key={language.name} />
  ));

  const letterElements = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const letterDisplay = isGuessed ? letter : "";
    return <span key={index}>{letterDisplay.toUpperCase()}</span>;
  });

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        key={letter}
        onClick={() => addGuessedLetter(letter)}
        className={className}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

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
