function getWeather() {
    const apiKey = 'b12c08c907a559eddbfe8d6bf1923e4b';
    const lat = 21.000829; // Vĩ độ của vị trí cố định
    const lon = 105.809291; // Kinh độ của vị trí cố định
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <div class="weather-info">
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].main}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

window.onload = getWeather;
