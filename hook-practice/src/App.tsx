import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
  }
  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={increaseCounter}>Increase by 4</button>
    </>
  )
}

export default App
