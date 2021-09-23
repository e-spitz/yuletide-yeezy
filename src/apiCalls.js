export const fetchQuote = () => {
  return fetch('https://api.kanye.rest')
  .then(res => res.json())
}
