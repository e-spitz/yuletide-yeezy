import './Postcard.css'

export const Postcard = ({ quote, btnClicked, imgBtnClicked, randomImage }) => {

  return (
    <>
      <section className='postcard'>
      {!quote && !btnClicked ? <section className='quote-box'>Quote goes here...</section> : <section className='quote-box'>{quote.quote}</section>}
      {quote && !btnClicked && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
      {!imgBtnClicked ? <p>Image goes here</p> : <img src={randomImage}/>}
      </section>
    </>
  )
}
