import './Postcard.css'

export const Postcard = ({ quote, btnClicked, imgBtnClicked, randomImage }) => {

  return (
      <section className='postcard'>
      {!quote && !btnClicked ? <p className='quote-box'>Quote goes here...</p> : <section className='quote-box'>{quote.quote}</section>}
      {quote && !btnClicked && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
      {!imgBtnClicked ? <img className='image-box'src={require('../../assets/img12.jpg').default} alt='Kanye Holiday card'/> : <img className='image-box' src={randomImage} alt='Kanye Holiday card'/>}
      </section>
  )
}
