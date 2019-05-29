import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Do Assignment',
    id: 123653098553,
    completed: false
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoData,
      todoItem: ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  changeHandler = (e) => {
    this.setState({
      todoItem: e.target.value,
    });
  }


  addTask = () => {
    const newTask = {
      task: this.state.todoItem,
      id: Date.now(),
      completed: false
    };

    const newTodoList = this.state.todoList.concat(newTask);

    this.setState({
      todoList: newTodoList,
      todoItem: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoItems=
          {this.state.todoList}
        />
        <TodoForm
          todoItem={this.state.todoItem}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
