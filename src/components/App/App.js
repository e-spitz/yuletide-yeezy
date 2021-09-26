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

  // const removeFavorite = (id) => {
  //   const remainingCards = setFavs.filter(fav => id !== fav.id)
  //   console.log(remainingCards)
  //   setFavs(remainingCards)
  // }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/yuletide-yeezy' render={() => <GenerateSection addFavorite={addFavorite} favorites={favs}/>}/>
        <Route exact path='/favorites' render={() => <Favorites />}/>
      </Switch>
    </div>
  );
}

export default App;
