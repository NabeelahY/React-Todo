import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    let { todoItems } = props;
    return (
        todoItems.map(todo => {
           return <Todo todo = { todo.task } id = {todo.id} />
        })
    )         
}

export default TodoList;
