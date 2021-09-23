import './App.css';
import { useState, useEffect } from 'react';
import { fetchQuote } from './apiCalls.js';

function App() {
  const [quote, setQuote] = useState('') //sets random quote fetched by api get request
  const [image, setImage] = useState('') //string should be url for image?
  const [favQuotes, setFavQuotes] = useState([]) //adds card to favorites state
  const [error, setError] = useState('') //error in api
  const [warning, setWarning] = useState('') //warning if user does not set an image or quote

//no api call needs to be done on window load, this is just to test
  useEffect(() => {
    fetchQuote()
    .then(res => setFavQuotes(res))
  }, [])

  //need to fetchQuote when user clicks generate quote button (quote is already random)
  //need to add assets folder of images to sort through
  //random image created with generate image button
  //generate button or should it just be add to favorite button?
  //if !quote || !image then disable button

  //function to randomize photos and setState to random photo

  return (
    <div className="App">
    <header className="header">
    yuletide yeezy
    </header>
    </div>
  );
}

export default App;
