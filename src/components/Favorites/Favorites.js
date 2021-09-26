import './Favorites.css'
import { useState, useEffect } from 'react'
import { Card } from '../Card/Card'
import { NavLink } from 'react-router-dom'

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
    {!cards.length && <h2 className='no-fav-header'>No favorites yet. Go <NavLink to='/' className='create-link'>CREATE!</NavLink></h2>}
    <section className='card-container'>{cards}</section>
    </>
  );
}
