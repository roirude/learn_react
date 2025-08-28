import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
    </main>
  );
}

export default App;
