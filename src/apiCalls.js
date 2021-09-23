export const fetchQuote = () => {
  return fetch('https://api.kanye.rest')
  .then(res => res.json())
  .catch(res => {
    if (res.status === 404) return 'Server don\'t want none'
    if (res.status !== 200) return 'Failed to find ridiculous quote'
    if (res.status === 200) return res
  })
}

// export async function fetchQuote() {
//   const result =  fetch('https://api.kanye.rest')
//   if (result.status === 404) return "Some funny Kanye quote!"
//   if (result.status !== 200) throw new Error('Failed to find a ridiculous quote.')
//   if (result.status === 200) {
//     return await result.json()
//   }
// }

// export async function fetchCityForecast(cityName: string): Promise<WeatherLocation | undefined>
// {
//   const result = await fetch(`${baseURL}weather?q=${cityName}&appid=${apiKey}`)
//
//   if (result.status === 404) return undefined;
//   if (result.status !== 200) throw new Error('Failed to read location data');
//
//   if (result.status === 200) {
//
//     const newResult = await result.json()
//     return cleanCurrentWeatherData(newResult)
//   }
// };
