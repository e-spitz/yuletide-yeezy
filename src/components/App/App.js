import './App.css';
import { useState } from 'react';
import { Header } from '../Header/Header'
import { GenerateSection } from '../GenerateSection/GenerateSection'
import { Favorites } from '../Favorites/Favorites'
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
  const [favs, setFavs] = useState([])

  const addFavorite = (favObj) => {
    setFavs([favObj, ...favs])
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <GenerateSection addFavorite={addFavorite} favorites={favs}/>}/>
        <Route exact path='/favorites' render={() => <Favorites />}/>
      </Switch>
    </div>
  );
}

export default App;
