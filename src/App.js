import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';
import './components/TodoComponents/Todo.css';
import todoData from './components/TodoComponents/TodoData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoData,
      todoItem: '',
      searchItem: ''
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

  keyDown = (e) => {
    if (e.key === 'Enter') {
      this.addTask()
    }
  }

  addTask = () => {
    if(this.state.todoItem.trim()) {
      const newTask = {
        task: this.state.todoItem,
        id: new Date(),
        completed: false
      };
  
      const newTodoList = this.state.todoList.concat(newTask);
  
      this.setState({
        todoList: newTodoList,
        todoItem: ''
      })
    }
  }

  toggleComplete = (id) => {
    this.setState(state => ({
      todoList: state.todoList.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task;
      })
    }))
  }

  clearCompleted = () => {
    this.setState(state => ({
      todoList: state.todoList.filter(task => !task.completed)
    }))
  }

  searchHandler = (e) => {
    this.setState({
      searchItem: e.target.value,
    });
  }

  search = () => {
    this.setState(state => ({
      todoList: state.todoList.include()
    }))
  }

  render() {
    return (
      <div className='todo-container'>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoSearch
          value={this.state.searchItem}
          search={this.searchHandler}
           />
        </div>
        <div>
          <TodoList todoItems=
            {this.state.todoList}
            toggleComplete={this.toggleComplete}
            searchQuery = {this.state.searchItem}
          />
        </div>
        <div>
          <TodoForm
            todoItem={this.state.todoItem}
            changeHandler={this.changeHandler}
            keyChange={this.keyDown}
            addTask={this.addTask}
            clear={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
