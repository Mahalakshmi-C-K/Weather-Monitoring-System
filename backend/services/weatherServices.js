const axios = require('axios');

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid: process.env.API_KEY
      }
    });
    
    const data = response.data;
    const tempCelsius = data.main.temp - 273.15;
    const feelsLikeCelsius = data.main.feels_like - 273.15;

    return {
      city,
      main: data.weather[0].main,
      temp: tempCelsius,
      feels_like: feelsLikeCelsius,
      dt: data.dt
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = { fetchWeatherData };
