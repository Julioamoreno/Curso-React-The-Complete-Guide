import React, { useRef, useContext } from "react";
import { TodoContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const context = useContext(TodoContext);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        context.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="newTodoText">Todo Text</label>
            <input type="text" name="new-todo" id="newTodoText" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;