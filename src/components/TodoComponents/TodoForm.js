import React from 'react';

function TodoForm ({ todoItem}) {
    return (
        <div>
            <input 
                value = {todoItem}
                type = 'text'
                placeholder = 'Add Todo...'
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;
