import React from 'react';

const TodoSearch = (props) => {
    let { query, search } = props;

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
