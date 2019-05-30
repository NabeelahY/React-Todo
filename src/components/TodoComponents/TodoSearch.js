import React from 'react';

const TodoSearch = ({ query, search }) => {
    return (
        <div>
            <input 
                type='text'
                placeholder='Search...'
                value={query}
                onChange={search}
            />
        </div>
    )
}

export default TodoSearch;
