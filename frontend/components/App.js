import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        
        <ul>
          <li>Rock</li>
          <li>The</li>
          <li>House</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
          <button>Clear</button>
        </form>
      </div>
    )
  }
}
