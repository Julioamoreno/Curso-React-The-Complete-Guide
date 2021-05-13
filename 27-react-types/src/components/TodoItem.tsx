import React from 'react';

import classes from './TodoItem.module.css';

const Item:React.FC<{ text: string, removeTodoItem: () => void }> = (props) => {
    return (
        <li onClick={props.removeTodoItem} className={classes.item}>
            {props.text}
        </li>
    )
}

export default Item;