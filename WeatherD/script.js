document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const weatherDesc = document.getElementById('weather-description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const body = document.body;

    // SUA CHAVE AQUI ↓
    const apiKey = 'cd628f798737a41b1457849b84b5ffc0'; 

    // Mapeamento de condições climáticas para emojis
    const weatherIcons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Drizzle': '🌦️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️'
    };

    // Classes CSS para diferentes climas
    const weatherClasses = {
        'Clear': 'sunny',
        'Clouds': 'cloudy',
        'Rain': 'rainy',
        'Drizzle': 'rainy',
        'Thunderstorm': 'rainy',
        'Snow': 'snowy',
        'Mist': 'foggy'
    };

    async function fetchWeather(city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
            );
            
            const data = await response.json();
            
            if (data.cod === 200) {
                const weatherMain = data.weather[0].main;
                
                weatherIcon.textContent = weatherIcons[weatherMain] || '🌡️';
                temperature.textContent = `${Math.round(data.main.temp)}°C`;
                weatherDesc.textContent = data.weather[0].description;
                humidity.textContent = `Umidade: ${data.main.humidity}%`;
                wind.textContent = `Vento: ${Math.round(data.wind.speed * 3.6)} km/h`; // Convertendo m/s para km/h
                
                body.className = weatherClasses[weatherMain] || 'sunny';
            } else {
                alert('Cidade não encontrada! Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            alert('Erro na conexão. Verifique sua internet.');
        }
    }

    // Event listeners
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) fetchWeather(city);
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && cityInput.value.trim()) {
            fetchWeather(cityInput.value.trim());
        }
    });

    // Dados iniciais
    fetchWeather('São Paulo');

    // No JS
const loader = document.createElement('div');
loader.className = 'loader';

// Antes do fetch:
weatherCard.appendChild(loader);
loader.style.display = 'block';

// Após receber dados:
loader.style.display = 'none';

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/...&lat=${latitude}&lon=${longitude}...`);


    async function updateWeather(city) {
    const apiKey = 'SUA_CHAVE_API';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    );
    const data = await response.json();

    async function updateExchangeRate() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    state.exchangeRates = data.rates;
    
});
});

