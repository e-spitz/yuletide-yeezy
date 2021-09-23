import './App.css';
import { Component } from 'react'
import { fetchQuote } from './apiCalls.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      postCards: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchQuote()
  }

render() {
    return (
      <div className="App">
      <header className="header">
      yuletide yeezy
      </header>
      </div>
    );
  }
}

export default App;
