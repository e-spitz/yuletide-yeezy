import './Card.css'
import PropTypes from 'prop-types';

export const Card = ({ card, remove }) => {
  return (
      <section className='fav-card'>
        <button className='remove-btn' onClick={() => remove(card.id)}>&times;</button>
        <div className='card-quote-container'>
          <p className='card-quote'>{card.quote}</p>
        </div>
        <img src={card.img} alt='Holiday Kanye card'/>
      </section>
    );
  }

  Card.propTypes = {
    card: PropTypes.object,
    remove: PropTypes.func
  }
