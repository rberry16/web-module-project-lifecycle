import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'



export default class App extends React.Component {
  state = {
    todos: [],
    error: '',
    todoNameInput: '',
  }

  inputChange = evt => {
    const {value} = evt.target;
    this.setState({...this.state, todoNameInput: value})
  }

  clearForm = () => {
    this.setState({...this.state, todoNameInput: ''});
  }

  setAxiosErr = () => {
    this.setState({...this.state, error: err.response.data.message});
  }

  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoNameInput})
      .then(res => {
        this.fetchAllTodos();
        this.clearForm();
      })
      .catch(err => {
        this.setAxiosErr();
      })
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(err => {
        this.setAxiosErr();
      })
  }

  formSubmit = evt => {
    evt.preventDefault();
    this.postNewTodo();
  }

  componentDidMount() {
    this.fetchAllTodos();
  }

  render() {
    return (
      <div>
        <div id='error'>Error: {this.state.error}</div>
        <div id='todos'>
          <h2>Todos</h2>
          {this.state.todos.map(todo => {
            return (
              <div key={todo.id}>{todo.name}</div>
            )
          })}
        </div>
        <form onSubmit={this.formSubmit} id='todoform'>
          <input 
            value={this.state.todoNameInput} 
            onChange={this.inputChange} 
            type='text' 
            placeholder='type here...' />
          <input type='submit' />
          <button>Clear completed</button>
        </form>
      </div>
    )
  }
}
