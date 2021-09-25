import './Card.css'

export const Card = ({ card, remove }) => {

  return (
    <>
    {card &&
      <section>
      <p>{card.quote}</p>
      <img src={card.img}/>
      <button className='remove-btn' onClick={() => remove(card.id)}><i class="fas fa-heart"></i></button>
      </section>}
      </>
    );
  }
