import debounce from 'lodash.debounce'
const inputEl = document.querySelector('.input')

inputEl.addEventListener('input', debounce(onSearch, 500) )
function onSearch (event){
    event.preventDefault()

    console.log(event.target.value);
    const countryName = event.target.value


    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data=>console.log)
    
}
