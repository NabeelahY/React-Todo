import React from 'react';

function Todo(props) {
    let { todos } = props;
    return (
        todos.map(item => {
            return <div>{item}</div>
        })
    )
}

export default Todo;
