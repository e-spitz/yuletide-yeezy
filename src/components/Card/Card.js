import './Card.css'

export const Card = ({ card, remove }) => {
  return (
      <section className='fav-card'>
      <button className='remove-btn' onClick={() => remove(card.id)}>&times;</button>
      <span className='hidden'>Remove from favs</span>
        <div className='card-quote-container'>
          <p className='card-quote'>{card.quote}</p>
        </div>
        <img src={card.img}/>

      </section>
    );
  }
