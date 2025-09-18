
import { useCallback, useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [counter, setCounter] = useState(0)

  const fn = useCallback(() => { }, [])

  return (
    <>
      <Header fn={fn} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>Counter++</button >
    </>
  )
}

export default App
