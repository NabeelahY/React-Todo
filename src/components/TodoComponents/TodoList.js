import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props) {
    let { todoItems } = props;
    return (
        todoItems.map(todo => {
           return <Todo item = { todo } />
        })
    )         
}

export default TodoList;
