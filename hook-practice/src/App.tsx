import {  useRef } from 'react'
import './App.css'

function App() {
  const inputElement = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const current = inputElement.current
    if (current) {
      current.style.background = "red"
    }
  }

  return (
    <>
      <input type="text" placeholder='text' ref={inputElement} />
      <button onClick={handleClick}>Click here</button>
    </>
  )
}

export default App
