
import { useReducer } from 'react'
import './App.css'

function App() {
  const initialState = { counter: 0 }

  interface State {
    counter: number;
  }

  interface IncreaseAction {
    type: "increase";
  }

  interface DecreaseAction {
    type: "decrease";
  }

  interface InputAction {
    type: "input";
    payload: number
  }

  type Action = IncreaseAction | DecreaseAction | InputAction;

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "increase": {
        return { counter: state.counter + 1 }
      }
      case "decrease": {
        return { counter: state.counter - 1 }
      }
      case "input": {
        return { counter: action.payload }
      }
      default: {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <br />
      <input
        type="number"
        placeholder='enter number'
        value={state.counter}
        onChange={(e) => dispatch({ type: "input", payload: Number(e.target.value) })}
      />
    </>
  )
}

export default App
