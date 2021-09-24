import './PostcardContainer.css';
import { Postcard } from '../Postcard/Postcard'

export const PostcardContainer = ({ error, randomQuote, btnClicked, imgBtnClicked, randomImage, saveToFav }) => {

   return (
     <section className='postcard-container'>
       <Postcard
       error={error}
       id={Date.now()}
       key={Date.now()}
       quote={randomQuote}
       image={randomImage}
       btnClicked={btnClicked}
       imgBtnClicked={imgBtnClicked}
       />
      </section>
   )
 }
