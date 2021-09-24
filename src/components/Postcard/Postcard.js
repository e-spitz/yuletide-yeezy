import './Postcard.css'


export const Postcard = ({ error, id, key, quote, image, btnClicked, imgBtnClicked }) => {

  return (
    <section className='postcard'>
      {error && <p className='error'>{error}</p>}
      {!quote && !btnClicked && <p className='quote-box'>Quote goes here...</p>}
      {!error && quote && btnClicked && <p className='quote-box'>{quote}</p>}
      {quote && !btnClicked && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
      <div className='img-div'>
      {!imgBtnClicked ? <img className='image-box' src={require('../../assets/img12.jpg').default} alt='Kanye Holiday card'/> : <img className='image-box' src={image} alt='Kanye Holiday card'/>}
      </div>
    </section>
  )
}
