import { createContext, useEffect, useReducer } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'

export type Task = {
  id: number,
  text: string,
  completed: boolean
}

type ActionReducer = {
  type: string,
  payload: Task
}

const todoReducer = (state: Task[], action: ActionReducer) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false }
      ]
    case "TOGGLE_TODO":
      return state.map((task: Task) => task.id === action.payload.id
        ? { ...task, completed: !task.completed }
        : task
      )
    case "DELETE_TODO":
      return state.filter((task) => task.id !== action.payload.id)
    default:
      throw new Error()

  }
}

type TodoContextType = {
  tasks: Task[];
  dispatch: React.Dispatch<ActionReducer>;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

function App() {
  useEffect(() => {
    console.log(tasks)
  })

  const [tasks, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      <AddToDo />
      <ToDoList />
    </TodoContext.Provider>
  )
}

export default App
