import './Postcard.css'

export const Postcard = ({ quote, image, btnClicked, imgBtnClicked }) => {
  return (
    <section className='postcard-container'>
    {!quote && !btnClicked ? <p className='quote-box'>Quote goes here...</p> : <section className='quote-box'>{quote}</section>}
    {quote && !btnClicked && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
    {!imgBtnClicked ? <img className='image-box'src={require('../../assets/img12.jpg').default} alt='Kanye Holiday card'/> : <img className='image-box' src={image} alt='Kanye Holiday card'/>}
    </section>
  )
}
