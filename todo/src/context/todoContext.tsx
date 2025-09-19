import { createContext } from "react";
import type { ActionReducer, Todo } from "../type";

type TodoContextType = {
    todos: Todo[],
    dispatch: React.Dispatch<ActionReducer>
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)