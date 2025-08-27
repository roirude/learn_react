import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }
  const [newDice, setNewDice] = useState(() => generateAllNewDice());

  function hold(id) {
    setNewDice((prevNewDice) =>
      prevNewDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = newDice.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      hold={() => hold(dice.id)}
    />
  ));

  function rollDice() {
    if (!gameWon) {
      setNewDice((prevNewDice) =>
        prevNewDice.map((die) =>
          !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die
        )
      );
    } else {
      setNewDice(() => generateAllNewDice())
    }
  }

  const gameWon =
    newDice.every((die) => die.isHeld) &&
    newDice.every((die) => die.value === newDice[0].value);

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
