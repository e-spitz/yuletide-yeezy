import './Favorites.css'
import { useState, useEffect } from 'react'
import { Card } from '../Card/Card'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export const Favorites = () => {
const [savedFavCards, setSavedFavCards] = useState([])

const getFromStorage = () => {
  const keys = Object.keys(localStorage)
  let savedCards;
  if (keys.length) {
    savedCards = keys.map(key => {
      return JSON.parse(localStorage.getItem(key))
    })
    setSavedFavCards([...savedCards])
  }
}

const removeFromStorage = (id) => {
    let result = window.confirm('You sure you want to remove this masterpiece?')
    if (result) {
      localStorage.removeItem(id)
      const remainingCards = savedFavCards.filter(card => id !== card.id)
      setSavedFavCards([...remainingCards])
      return savedFavCards
    }
}

useEffect(() => {
  getFromStorage()
}, [])

const cards = savedFavCards.map((card) => (<Card card={card} key={card.id} remove={removeFromStorage}/>));

  return (
    <>
      <Header />
      {!cards.length && <h2 className='no-fav-header'>No favorites yet. Go <NavLink to='/yuletide-yeezy' className='create-link'>CREATE!</NavLink></h2>}
      <section className='card-container'>{cards}</section>
    </>
  );
}

Favorites.propTypes = {
  savedFavCards: PropTypes.array,
  getFromStorage: PropTypes.func,
  removeFromStorage: PropTypes.func
}
