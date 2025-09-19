import type { Todo } from "../type"
import { useTodoContext } from "../hooks/useTodoContext"

const ToDoItem = ({ todo }: { todo: Todo }) => {
    const {dispatch} = useTodoContext()

    const handleToogle = () => {
            dispatch({
                type: "TODO_TOOGLE",
                payload: todo
            })
    }
    const handleDelete = () => {
            dispatch({
                type: "DELETE_TODO",
                payload: todo
            })
    }

    return (
        <div>
            <input type="checkbox" id={String(todo.id)} checked={todo.completed} onChange={handleToogle} />
            <label htmlFor={String(todo.id)} className={todo.completed ? "completed" : ""}>{todo.value}</label>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default ToDoItem
