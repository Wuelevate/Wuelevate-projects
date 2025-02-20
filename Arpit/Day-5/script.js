const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    if (!city) return alert("Please enter a city name!");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
    }
});

function displayWeather(data) {
    const weatherInfo = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherInfo;
}
