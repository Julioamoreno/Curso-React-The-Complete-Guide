import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todos-context';

import classes from './Todos.module.css';

const Todos: React.FC = () => {
   const context = useContext(TodoContext);

    return <ul className={classes.todos}>
        {context.items.map((item) => (
            <TodoItem key={item.id} text={item.text} removeTodoItem={ context.removeTodo.bind(null, item.id)} />
        ))}
    </ul>
}

export default Todos;
