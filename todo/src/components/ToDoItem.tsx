import { useContext } from "react"
import { TodoContext, type Task } from "../App"

function ToDoItem(todo: Task) {

    const todoContext = useContext(TodoContext);
    if (!todoContext) {
        throw new Error("ToDoItem must be used within a TodoContextProvider");
    }
    const { dispatch } = todoContext;

    const handleToggle = () => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: todo,
        });
    };

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todo,
        });
    };

    return (
        <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                placeholder="add task"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span>{todo.text}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ToDoItem
