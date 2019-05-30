import React from 'react';

const Todo = ({ todo, toggleComplete, id, complete }) => { 
    return <p className = { complete ? 'strikeThrough' : null } onClick = {() => toggleComplete(id)}>{todo}</p>

}

export default Todo;
