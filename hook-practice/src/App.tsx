import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCounter(prev => prev + 1)
    }, 1000)
  }, [counter])
  return (
    <>
      <h1>I've rendered {counter} times.</h1>
    </>
  )
}

export default App
