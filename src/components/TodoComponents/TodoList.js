import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = ({ todoItems, toggleComplete, searchQuery }) => {
    return (
        // eslint-disable-next-line array-callback-return
        todoItems.map(todo => {
            if(todo.task.toLowerCase().includes(searchQuery)){
                return <Todo todo = { todo.task } key = {todo.id} toggleComplete = { toggleComplete } id = {todo.id} complete = {todo.completed} />
            }
        })
    )         
}

export default TodoList;
