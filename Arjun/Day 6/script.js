const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherDetails = document.getElementById('weatherDetails');

const apiKey ='d32645f393b17c5393290a6df4e195f8';
searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                weatherDetails.innerHTML = `<p>City not found.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDetails.innerHTML = `<p>Error fetching weather data.</p>`;
        });
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    const { temp, humidity } = main;
    const { description, icon } = weather[0];

    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

    weatherDetails.innerHTML = `
        <h2>${name}</h2>
        <img src="${iconUrl}" alt="${description}">
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${description}</p>
    `;
}