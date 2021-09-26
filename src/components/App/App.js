import './App.css';
import { useState } from 'react';
import { Header } from '../Header/Header'
import { GenerateSection } from '../GenerateSection/GenerateSection'
import { Favorites } from '../Favorites/Favorites'
import { Error } from '../Error/Error'
import { Login } from '../Login/Login'
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
  const [favs, setFavs] = useState([])
  const [noClicked, setNoClicked] = useState(false)
  const [yesClicked, setYesClicked] = useState(false)

  const addFavorite = (favObj) => {
    setFavs([favObj, ...favs])
  }

  // const checkNo = () => {
  //   setNoClicked(true)
  //   setTimeout(() => setNoClicked(false), 4000)
  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Login />}/>
        <Route exact path='/yuletide-yeezy' render={() => <GenerateSection addFavorite={addFavorite} favorites={favs}/>}/>
        <Route exact path='/favorites' render={() => <Favorites />}/>
        <Route exact path='*' render={() => <Error />}/>
      </Switch>
    </div>
  );
}

export default App;
