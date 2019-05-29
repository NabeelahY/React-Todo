import React from 'react';

function TodoForm ({ todoItem, changeHandler, addTask }) {
    return (
        <div>
            <input 
                value = {todoItem}
                onChange = {changeHandler}
                type = 'text'
                placeholder = 'Add Todo...'
            />
            <button onClick = {addTask}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;
