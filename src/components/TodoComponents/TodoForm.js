import React from 'react';

function TodoForm ({ todoItem, changeHandler, keyChange, addTask }) {
    return (
        <div>
            <input 
                value = {todoItem}
                onChange = {changeHandler}
                onKeyDown = {keyChange}
                type = 'text'
                placeholder = 'Add Todo...'
            />
            <button onClick = {addTask}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;
