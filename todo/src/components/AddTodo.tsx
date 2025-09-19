import { useState } from "react"
import { useTodoContext } from "../hooks/useTodoContext"

const AddTodo = () => {
    const [value, setValue] = useState("")
    const { dispatch } = useTodoContext()


    const addTodo = () => {
        if (value.trim() === "") throw new Error("Enter new todo item")
        dispatch({
            type: "ADD_TODO",
            payload: { id: Date.now(), value: value, completed: false }
        })
        setValue("")
    }

    return (
        <div>
            <input value={value} type="text" placeholder="enter todo" onChange={(e) => setValue(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default AddTodo