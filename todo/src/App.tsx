import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import ToDoList from './components/TodoList'
import type { ActionReducer, Todo } from './type'
import { TodoContext } from './context/todoContext'

const todoReducer = (state: Todo[], action: ActionReducer) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), value: action.payload.value, completed: false }
      ]
    case "TODO_TOOGLE":
      return state.map((todo) => (
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      ))
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      throw Error()
  }
}


function App() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <h1>Todo</h1>
      <AddTodo />
      <ToDoList />
    </TodoContext.Provider>
  )
}

export default App
