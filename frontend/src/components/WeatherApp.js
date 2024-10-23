import React, { useState } from 'react';
import '../styles/WeatherApp.css'; // Import styles

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Default city or empty string
  const [error, setError] = useState('');

  // Function to fetch weather data from the backend
 // Function to fetch weather data from the backend
const fetchWeatherData = async (city) => {
  const apiKey = '308e1aaef938fd4b26a87b73d88fc28a'; // Use your actual API key here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    console.log("Fetching data from:", url); // Log the URL
    const response = await fetch(url);
    console.log("Response status:", response.status); // Log the response status

    if (response.ok) {
      const data = await response.json();
      console.log("Weather data received:", data); // Log the received data
      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        main: data.weather[0].main,
      });
      setError('');
    } else {
      setError('Error fetching weather data');
      setWeatherData(null);
    }
  } catch (err) {
    console.error("Fetch error:", err); // Log any fetch errors
    setError('Could not fetch weather data');
  }
};

  

  // Handle city change
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting city:", city); // Log city name
    fetchWeatherData(city);
  };

  return (
    <div className="weather-app">
      <h1>Weather Monitoring App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.city}</h2>
          <p>Temperature: {weatherData.temp.toFixed(2)}°C</p>
          <p>Feels like: {weatherData.feels_like.toFixed(2)}°C</p>
          <p>Condition: {weatherData.main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
