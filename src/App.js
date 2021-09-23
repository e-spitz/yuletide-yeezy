import './App.css';
import { useState, useEffect } from 'react';
import { fetchQuote } from './apiCalls.js';


function App() {
  const [favQuotes, setFavQuotes] = useState([])

  useEffect(() => {
    fetchQuote()
    .then(data => setFavQuotes(data))
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
