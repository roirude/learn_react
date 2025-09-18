
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  function cubeNum(num: number) {
    console.log("Calculation Done!")
    return Math.pow(num, 3)
  }

  const result = useMemo(() => {
    return cubeNum(number)
  }, [number])

  return (
    <>
      <input type="number" placeholder='number' onChange={(e) => setNumber(Number(e.target.value))} />
      <h1>Cube of the number: {result}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>Counter++</button >
      <h1>Counter: {counter}</h1>
    </>
  )
}

export default App
