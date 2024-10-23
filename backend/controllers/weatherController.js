const axios = require('axios');

const API_KEY = process.env.WEATHER_API_KEY; // Ensure this is set in your .env file

const getWeatherByCity = async (req, res) => {
    const city = req.params.city;
    console.log("Received request for city:", city);

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const weatherData = {
            city: response.data.name,
            temp: response.data.main.temp,
            feels_like: response.data.main.feels_like,
            main: response.data.weather[0].main,
        };

        console.log("Weather data fetched successfully:", weatherData);
        res.status(200).json(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        if (error.response) {
            res.status(error.response.status).json({ message: error.response.data.message });
        } else {
            res.status(500).json({ message: 'Error fetching weather data' });
        }
    }
};

// Ensure that getWeatherByCity is exported correctly
module.exports = {
    getWeatherByCity,
};
