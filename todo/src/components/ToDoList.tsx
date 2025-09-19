import { useContext } from 'react';
import ToDoItem from './ToDoItem';
import { TodoContext } from '../App';

function TodoList() {
    const context = useContext(TodoContext);

    if (!context || context.tasks.length === 0) {
        return <p>No tasks to display. Add a new one!</p>;
    }

    return (
        <ul>
            {context.tasks.map((todo) => (
                <ToDoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
}

export default TodoList;