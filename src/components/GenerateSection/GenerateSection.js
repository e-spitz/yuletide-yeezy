import './GenerateSection.css'
import { fetchQuote } from '../../apiCalls';
import { useState } from 'react';
import { Postcard } from '../Postcard/Postcard'

export const GenerateSection = () => {
  const [quote, setQuote] = useState('')
  const [btnClicked, setBtnClicked] = useState(false)
  const [imgBtnClicked, setImgBtnClicked] = useState(false)
  const [image, setImage] = useState('')

  const generateQuote = () => {
    fetchQuote()
    .then(res => setQuote(res))
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

  return (
    <div className='home'>
      <aside className='generate-aside'>
        <button className='gen-quote-btn' onClick={generateQuote}>generate quote</button>
        <button className='gen-image-btn' onClick={generateImage}>generate image</button>
      </aside>
      <Postcard quote={quote} btnClicked={btnClicked} imgBtnClicked={imgBtnClicked} randomImage={image}/>
    </div>
  );
}
