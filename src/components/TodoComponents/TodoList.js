import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props) {
    let { lists } = props;
    return (
        lists.map(list => {
            return <div>{list}</div>
        })
    )
}

export default TodoList;