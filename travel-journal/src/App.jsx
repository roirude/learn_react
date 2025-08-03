import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Header />
        <Entry />
      </main>
    </>
  );
}

export default App;
