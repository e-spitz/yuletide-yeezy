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

// {!cities.length ? (
//                    <h2 className="no-city">No forecasts to show</h2>
//                  ) : (
//                    <HomeCityCards
//                      allCities={cities}
//                      onSelect={(city) => {
//                        setCurrentCity(city);
//                        setDetails(city.coord);
//                      }}
//                      clickedCard={currentCity}
//                      details={forecastDetails}
//                      deleteCity={deleteCity}
//                    />
//                  )}

export default App;
