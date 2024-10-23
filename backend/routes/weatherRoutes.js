// const express = require('express');
// const { getWeatherByCity, getSummary, triggerAlertCheck } = require('../controllers/weatherController');

// const router = express.Router();

// router.get('/fetch/:city', getWeatherByCity);
// router.get('/summary', getSummary);
// router.get('/alert', triggerAlertCheck);

// module.exports = router;
const express = require('express');
const { getWeatherByCity } = require('../controllers/weatherController'); // Adjust path if necessary

const router = express.Router();

// Ensure this is the correct function name
router.get('/fetch/:city', getWeatherByCity); // This function should be defined in your controller

module.exports = router;
