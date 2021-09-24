import './Postcard.css'
// import { images } from '../../images'


export const Postcard = ({ quote, btnClicked, imgBtnClicked, randomImage }) => {
  // console.log('here', randomImage)
  // const getRandomIndex = () => {
  //   const index = Math.floor(Math.random() * 30) + 1;
  //   const randomImage = require(`../../assets/img${index}.jpg`).default;
  //   return randomImage;
  // }
  // const img = require({randomImage}).default

  return (
    <>
      <section className='postcard'>
      {!quote && !btnClicked ? <section className='quote-box'>Quote goes here...</section> : <section className='quote-box'>{quote.quote}</section>}
      {quote && !btnClicked && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
      <img src={randomImage}/>
      </section>
    </>
  )
}

// {!imgBtnClicked ? <p>Image goes here</p> : <img src={}/>}
