export const fetchQuote = () => {
  return fetch('https://api.kanye.rest')
  .then(res => res.json())
  .catch(res => {
    if (res.status === 404) return 'Server don\'t want none'
    if (res.status !== 200) return 'Failed to find ridiculous quote'
    if (res.status === 200) return res
  })
}
