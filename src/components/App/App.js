import './App.css';
import { useState } from 'react';
import { GenerateSection } from '../GenerateSection/GenerateSection'
import { Favorites } from '../Favorites/Favorites'
import { Error } from '../Error/Error'
import { Login } from '../Login/Login'
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

function App() {
  const [favs, setFavs] = useState([])

  const addFavorite = (favObj) => {
    setFavs([favObj, ...favs])
  }

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

App.propTypes = {
  favs: PropTypes.array,
  addFavorite: PropTypes.func
}
