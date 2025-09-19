import { useContext, useState } from "react"
import { TodoContext } from "../App"

function AddToDo() {
    const [text, setText] = useState("")
    const todoContext = useContext(TodoContext)

    function addTask() {
        if (text.trim() === "") return;
        if (!todoContext) return;
        todoContext.dispatch({
            type: "ADD_TODO",
            payload: {
                id: Date.now(),
                text,
                completed: false
            }
        });
        setText('')
    }

    return (
        <div>
            <input value={text} type="text" placeholder="new task" onChange={(e) => setText(e.target.value)} />
            <button onClick={addTask}>Add task</button>
        </div>
    )
}

export default AddToDo
