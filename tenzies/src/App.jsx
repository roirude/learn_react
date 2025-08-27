import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }
  const [newDice, setNewDice] = useState(generateAllNewDice());

  const diceElements = newDice.map((dice) => (
    <Die key={dice.id} value={dice.value} isHeld={dice.isHeld} />
  ));

  function rollDice() {
    setNewDice(generateAllNewDice());
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
