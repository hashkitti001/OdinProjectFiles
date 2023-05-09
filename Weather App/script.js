const getWeatherData = () => {
    const country = document.querySelector("#country").value
    fetch(`https://api.weatherapi.com/v1/current.json?key=b2ab521e6be34abab47233139230705&q=${country}`)
    .then(response => response.json())
    .then(response => console.log(response.location))
    .catch(err => console.error(err));
  
}