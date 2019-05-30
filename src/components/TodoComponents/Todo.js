import React from 'react';

const Todo = (props) => {
    let { todo, toggleComplete, id, complete } = props;
    
    return <p className = { complete ? 'strikeThrough' : null } onClick = {() => toggleComplete(id)}>{todo}</p>

}

export default Todo;
