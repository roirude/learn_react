import { useEffect } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  function generateAllNewDice() {
    const dices = [];
    
    for (let i = 0; i < 10; i++) {
      const random = Math.ceil(Math.random() * 6)
      dices.push(random)
    }

    return dices
  }

  console.log(generateAllNewDice())

  return (
    <main>
      <div className="dice-container">
        <Die value={1} />
        <Die value={3} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={4} />
        <Die value={2} />
        <Die value={5} />
      </div>
    </main>
  );
}

export default App;
