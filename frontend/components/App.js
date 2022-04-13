import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (task) => {

    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      return todo;
      })
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>Hello</h1>
        
        <TodoList todos={todos} handleToggle={this.handleToggle} />

        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear} >Clear</button>
      </div>
    )
  }
}
