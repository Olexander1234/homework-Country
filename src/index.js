import debounce from 'lodash.debounce'

const inputEl = document.querySelector('.input')
const listEl = document.querySelector('.list')

inputEl.addEventListener('input', debounce(onSearch, 1000))

function onSearch(event) {
  event.preventDefault()

  console.log(event.target.value)
  const countryName = event.target.value

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Використовуйте отримані дані для відображення розмітки
      listEl.innerHTML = `
        <h1>${data[0].name.common}</h1>
        <p>Capital: ${data[0].capital}</p>
        <p>Population: ${data[0].population}</p>
        <p>Region: ${data[0].region}</p>
      `
      if (listEl.childElementCount != 0 && event.target.value == 0)  {
        console.log(видаляєм );
      } 
      
})

}