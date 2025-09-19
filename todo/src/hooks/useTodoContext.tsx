import { useContext } from "react"
import { TodoContext } from "../context/todoContext"

export const useTodoContext = () => {
    const todoContext = useContext(TodoContext)
    if (!todoContext) {
        throw new Error("useTodoContext must be used within a TodoProvider")
    }

    return todoContext
}