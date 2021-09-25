import './GenerateSection.css'
import { fetchQuote } from '../../apiCalls';
import { useState } from 'react';
import { PostcardContainer } from '../PostcardContainer/PostcardContainer'
import { Header } from '../Header/Header'
import { Favorites } from '../Favorites/Favorites'
import { NavLink, Route } from 'react-router-dom'

export const GenerateSection = ({ addFavorite, favorites }) => {
  const [quote, setQuote] = useState('')
  const [btnClicked, setBtnClicked] = useState(false)
  const [image, setImage] = useState('')
  const [imgBtnClicked, setImgBtnClicked] = useState(false)
  const [error, setError] = useState('')
  const [warning, setWarning] = useState('')
  const [favBtnClicked, setFavBtnClicked] = useState(false)

  const resetAlerts = () => {
    setError('')
    setWarning('')
  }

  const generateQuote = async () => {
    resetAlerts()
    const fetchedQuote = await fetchQuote()
    if (!fetchedQuote.quote) {
      setError(`Kanye couldn't deliver. Check back later!`);
    } else {
      setQuote(fetchedQuote.quote)
      setBtnClicked(true)
    }
  }

  const getRandomImage = () => {
    const index = Math.floor(Math.random() * 30) + 1;
    const randomImage = require(`../../assets/img${index}.jpg`).default;
    setImage(randomImage)
    return randomImage;
  }

  const generateImage = () => {
    setWarning('')
    getRandomImage()
    setImgBtnClicked(true)
  }

  const checkFavs = (quote, image) => (favorites.find(fav => (fav.quote === quote && fav.img === image)))

  const saveToFav = (quote, image) => {
    const favObj = {
      img: image,
      quote: quote,
      id: Date.now()
    }
    const checkFav = checkFavs(quote, image)

    if (btnClicked && imgBtnClicked && !checkFav) {
      addFavorite(favObj)
      localStorage.setItem(favObj.id, JSON.stringify(favObj))
    } else if (!btnClicked) {
      setWarning('Add a quote!')
    } else if (!imgBtnClicked) {
      setWarning('Add an image!')
    } else {
      setWarning('Already saved!')
    }
  }

  // const removeFav = (id) => {
  //   removeFavorite(id)
  // }

  return (
    <div className='home'>
      <aside className='generate-aside'>
        <button className='gen-quote-btn' onClick={generateQuote}>generate quote <i class="fas fa-comment-dots"></i></button>
        <button className='gen-image-btn' onClick={generateImage}>generate image <i class="fas fa-image"></i></button>
        <button className='save-to-fav-btn' onClick={(e) => saveToFav(quote, image)}>add to favorites <i class="fas fa-heart"></i></button>
        {warning && <p className='warning'>{warning}</p>}
        <NavLink to='/favorites' className='fav-link'>
          <button className='view-fav-btn'>view favorites {favorites.length ? <i class="fas fa-heart"></i> : ''}</button>
        </NavLink>
      </aside>
      <PostcardContainer
        error={error}
        quote={quote}
        btnClicked={btnClicked}
        imgBtnClicked={imgBtnClicked}
        image={image}
      />
    </div>
  );
}

//add some sort of visual to show that add to favs button did something (i have heart adding to view favs button for now)
