import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  const [newDice, setNewDice] = useState(generateAllNewDice());

  const diceElements = newDice.map((value, index) => (
    <Die key={index} value={value} />
  ));

  function rollDice() {
    setNewDice(generateAllNewDice())
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
