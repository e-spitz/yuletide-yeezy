import './App.css';
import { useState, useEffect } from 'react';
import { fetchQuote } from './apiCalls.js';


function App() {
  const [favQuotes, setFavQuotes] = useState([])
  const [error, setError] = useState('')
  const [warning, setWarning] = useState('')

  useEffect(() => {
    fetchQuote()
    .then(res => setFavQuotes(res))
  }, [])

  return (
    <div className="App">
    <header className="header">
    yuletide yeezy
    </header>
    </div>
  );
}

export default App;
