import React from 'react';


const Todo = (props) => {
    let { todo, id } = props;
    return <div key = {id}>{todo}</div>

}

export default Todo;
