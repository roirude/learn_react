import { useState } from 'react'
import './App.css'

function App() {
  const [car, setCar] = useState({
    brand: "ferrari",
    model: "roma",
    color: "red",
    year: "2023"
  })

  const changeColor = () => {
    setCar(prev => ({ ...prev, color: "blue" }))
  }
  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
