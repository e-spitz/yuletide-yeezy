import './PostcardContainer.css';

export const PostcardContainer = ({ error, quote, btnClicked, imgBtnClicked, image }) => {

   return (
     <section className='postcard-container'>
       <article className='postcard'>
         {error && <p className='error'>{error}</p>}
         {!quote && !btnClicked && <p className='quote-box'>Quote goes here...</p>}
         {!error && quote && btnClicked && <p className='quote-box'>{quote}</p>}
         {quote && !btnClicked && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
         {!imgBtnClicked ? <img className='image-box' src={require('../../assets/img12.jpg').default} alt='Kanye Holiday card'/> : <img className='image-box' src={image} alt='Kanye Holiday card'/>}
       </article>
      </section>
   );
 }
