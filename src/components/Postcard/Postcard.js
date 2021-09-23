import './Postcard.css'

export const Postcard = ({ quote, select }) => {
  return (
    <>
      <section className='postcard'>
      {!quote && !select ? <section className='quote-box'>Quote goes here...</section> : <section className='quote-box'>{quote.quote}</section>}
      {quote && !select && <p className='loading quote-box'>Kanye's thinkin' up a good one..</p>}
      </section>
    </>
  )
}
