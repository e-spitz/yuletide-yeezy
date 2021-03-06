import './GenerateSection.css'
import { fetchQuote } from '../../apiCalls';
import { useState } from 'react';
import { PostcardContainer } from '../PostcardContainer/PostcardContainer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

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
      setFavBtnClicked(true)
      localStorage.setItem(favObj.id, JSON.stringify(favObj))
      setTimeout(() => setFavBtnClicked(false), 2000)
    } else if (!btnClicked) {
      setWarning('Add a quote!')
      setTimeout(() => setWarning(''), 2000)
    } else if (!imgBtnClicked) {
      setWarning('Add an image!')
      setTimeout(() => setWarning(''), 2000)
    } else {
      setWarning('Already saved!')
      setTimeout(() => setWarning(''), 2000)
    }
  }

  return (
    <>
    <Header />
    <div className='home'>
      <aside className='generate-aside'>
        <button className='gen-quote-btn' onClick={generateQuote}>generate quote <i class="fas fa-comment-dots"></i></button>
        <button className='gen-image-btn' onClick={generateImage}>generate image <i class="fas fa-image"></i></button>
        <button className='save-to-fav-btn' onClick={(e) => saveToFav(quote, image)}>add to favorites</button>
        {warning && <p className='warning'>{warning}</p>}
        <NavLink to='/favorites' className='fav-link'>
          <button className='view-fav-btn'>view favorites</button>
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
    </>
  );
}

GenerateSection.propTypes = {
  addFavorite: PropTypes.func,
  favorites: PropTypes.array,
  quote: PropTypes.string,
  image: PropTypes.string,
  btnClicked: PropTypes.bool,
  imgBtnClicked: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
  favBtnClicked: PropTypes.bool
}
