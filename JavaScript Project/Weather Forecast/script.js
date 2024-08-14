document.getElementById('searchButton').addEventListener('click', function() {
    const cityName = document.getElementById('cityInput').value.trim();
    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'dae2d7ff20314284b490e86dc5f2e0da'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.querySelector('.weather-info').style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});
