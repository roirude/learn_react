import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Language from "./components/Language";
import { languages } from "./languages";
import clsx from "clsx";
import { getFarewellText } from "./utils";

function App() {
  const [currentWord, SetCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languageElements = languages.map((language, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const className = clsx({
      lost: isLanguageLost,
    });
    return (
      <Language language={language} key={language.name} className={className} />
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const letterDisplay = isGuessed ? letter : "";
    return <span key={index}>{letterDisplay.toUpperCase()}</span>;
  });

  function addGuessedLetter(letter) {
    if (isGameOver) {
      return;
    }
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
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }

    return null;
  }

  return (
    <main>
      <Header />
      <section
        className={clsx(
          "game-status",
          isLastGuessIncorrect && !isGameOver && "farewell",
          isGameLost && "lost",
          isGameWon && "won"
        )}
      >
        {renderGameStatus()}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver ? <button className="new-game">New Game</button> : undefined}
    </main>
  );
}

export default App;
