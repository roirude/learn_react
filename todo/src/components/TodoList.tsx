import ToDoItem from "./TodoItem"
import { useTodoContext } from "../hooks/useTodoContext"

const ToDoList = () => {
    const { todos } = useTodoContext()

    if (!todos) {
        return (
            <p>
                No todo item, Add new todo!
            </p>
        )
    }
    return (
        <div>
            <h2>Todo List</h2>
            {
                todos.map(todo => (
                    <ToDoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default ToDoList
