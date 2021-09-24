import './GenerateSection.css'
import { fetchQuote } from '../../apiCalls';
import { useState } from 'react';
import { PostcardContainer } from '../PostcardContainer/PostcardContainer'

export const GenerateSection = () => {
  const [quote, setQuote] = useState('')
  const [btnClicked, setBtnClicked] = useState(false)
  const [imgBtnClicked, setImgBtnClicked] = useState(false)
  const [image, setImage] = useState('')
  const [favs, setFavs] = useState([]) //adds card to favorites state

  const generateQuote = () => {
    fetchQuote()
    .then(res => setQuote(res.quote))
    setBtnClicked(true)
  }

  const getRandomImage = () => {
    const index = Math.floor(Math.random() * 30) + 1;
    const randomImage = require(`../../assets/img${index}.jpg`).default;
    setImage(randomImage)
    return randomImage;
  }

  const generateImage = () => {
    getRandomImage()
    setImgBtnClicked(true)
  }

  const findFav = (quote, image) => {
    if (favs.length >= 1) {
      return favs.find(fav => fav.img === image && fav.quote === quote)
    }
  }

  const saveToFav = (quote, image) => {
    const favObj = {
      img: image,
      quote: quote
    }
    
    const checkImg = findFav(quote, image)

    if (btnClicked && !checkImg) {
      setFavs([favObj, ...favs])
    }
  }

  return (
    <div className='home'>
      <aside className='generate-aside'>
        <button className='gen-quote-btn' onClick={(e) => generateQuote(e)}>generate quote</button>
        <button className='gen-image-btn' onClick={generateImage}>generate image</button>
      </aside>
      <PostcardContainer
        randomQuote={quote}
        btnClicked={btnClicked}
        imgBtnClicked={imgBtnClicked}
        randomImage={image}
        saveToFav={saveToFav}/>
    </div>
  );
}
