import './App.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import { GenerateSection } from '../GenerateSection/GenerateSection'
import { fetchQuote } from '../../apiCalls';
import { Route } from 'react-router-dom';

function App() {
  // const [homeQuote, setHomeQuote] = useState('')
  const [error, setError] = useState('') //error in api
  const [warning, setWarning] = useState('') //warning if user does not set an image or quote


//no api call needs to be done on window load, this is just to test
  // useEffect(() => {
  //   fetchQuote()
  //   .then(res => setHomeQuote(res))
  // }, [])

//add set error and warning to fetch call

  return (
    <div className="App">
    <Route exact path='/' render={() => <Header />}/>
      <GenerateSection />
    </div>
  );
}

export default App;
