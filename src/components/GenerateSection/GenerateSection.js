import './GenerateSection.css'
import { fetchQuote } from '../../apiCalls';
import { useState } from 'react';
import { Postcard } from '../Postcard/Postcard'
import { images } from '../../images'

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

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  }

  const generateImage = () => {
    const randomImage = images[getRandomIndex(images)]
    console.log(randomImage)
    setImage(randomImage)
    setImgBtnClicked(true)
    console.log(typeof randomImage)
    return randomImage;
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
