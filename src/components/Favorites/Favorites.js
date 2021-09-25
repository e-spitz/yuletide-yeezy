import './Favorites.css'
import { useState, useEffect } from 'react'
import { Card } from '../Card/Card'

export const Favorites = () => {
const [savedCard, setSavedCard] = useState([])

const getFromStorage = () => {
  const keys = Object.keys(localStorage)
  let savedCards;
  if (keys.length) {
    savedCards = keys.map(key => {
      return JSON.parse(localStorage.getItem(key))
    })
    setSavedCard([...savedCards])
  }
}

const removeFromStorage = (id) => {
  console.log('removed', id)
}

useEffect(() => {
  getFromStorage()
}, [])

const cards = savedCard.map((card) => (<Card card={card} key={card.id} remove={removeFromStorage}/>));

  return (
    <section>
      {cards}
    </section>
  );
}
