import './PostcardContainer.css';
import { Postcard } from '../Postcard/Postcard'

export const PostcardContainer = ({ randomQuote, btnClicked, imgBtnClicked, randomImage, saveToFav }) => {

   return (
     <section className='postcard-container'>
       <Postcard
       id={Date.now()}
       key={Date.now()}
       quote={randomQuote}
       image={randomImage}
       btnClicked={btnClicked}
       imgBtnClicked={imgBtnClicked}
       saveToFav={saveToFav}
       />
      </section>
   )
 }
