import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  const changeColor = () => {
    setColor("blue")
  }
  return (
    <>
      <h1>My favorite color is {color}.</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
