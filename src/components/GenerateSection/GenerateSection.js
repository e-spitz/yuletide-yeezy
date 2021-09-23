import './GenerateSection.css'
import { fetchQuote } from '../../apiCalls';
import { useState } from 'react';
import { Postcard } from '../Postcard/Postcard'

export const GenerateSection = () => {
  const [quote, setQuote] = useState('')
  const [select, setSelect] = useState(false)

  const generateQuote = () => {
    fetchQuote()
    .then(res => setQuote(res))
    setSelect(true)
  }

  return (
    <div className='home'>
      <aside className='generate-aside'>
        <button className='gen-quote-btn' onClick={generateQuote} onSelect={select}>generate quote</button>
      </aside>
      <Postcard quote={quote} select={select}/>
    </div>
  );
}
