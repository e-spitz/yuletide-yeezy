import './App.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import { GenerateSection } from '../GenerateSection/GenerateSection'
import { fetchQuote } from '../../apiCalls';

// import { images } from '../../images'


function App() {
  const [homeQuote, setHomeQuote] = useState('')
  const [favQuotes, setFavQuotes] = useState([]) //adds card to favorites state
  const [error, setError] = useState('') //error in api
  const [warning, setWarning] = useState('') //warning if user does not set an image or quote

//no api call needs to be done on window load, this is just to test
  useEffect(() => {
    fetchQuote()
    .then(res => setHomeQuote(res))
  }, [])
  //need to fetchQuote when user clicks generate quote button (quote is already random)
  //need to add assets folder of images to sort through
  //random image created with generate image button
  //generate button or should it just be add to favorite button?
  //if !quote || !image then disable button

  //function to randomize photos and setState to random photo

  //assets of images folder

  return (
    <div className="App">
      <Header />
      <GenerateSection />
    </div>
  );
}

// <button className='gen-image-btn' onClick={generateImage}>generate image</button>

// <section className='side-bar'>
// <button className='gen-quote-btn' onClick={generateQuote}>generate quote</button>
// </section>

export default App;
