import './PostcardContainer.css';
import { Postcard } from '../Postcard/Postcard'

export const PostcardContainer = ({ randomQuote, btnClicked, imgBtnClicked, randomImage }) => {

  return (
    <Postcard
    quote={randomQuote}
    image={randomImage}
    btnClicked={btnClicked}
    imgBtnClicked={imgBtnClicked}
    />
  )
}

//   return (
//     <Postcard
//     quote={randomQuote}
//     image={randomImage}
//     btnClicked={btnClicked}
//     imgBtnClicked={imgBtnClicked}
//     />
//   )
// }
