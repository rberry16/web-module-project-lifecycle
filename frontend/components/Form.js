import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formInput = this.state.input;
    this.props.handleAdd(formInput);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
      <form>
          <input onChange={this.handleChange} />
          <button onClick={this.handleSubmit} >Add</button>
        </form>
    )
  }
}