const Weather = require('../models/weatherSummary');

const checkAlertConditions = async () => {
  const thresholdTemp = 35; // Example threshold
  const thresholdCount = 2;

  const latestWeatherData = await Weather.find().sort({ dt: -1 }).limit(thresholdCount);

  const consecutiveHighTemps = latestWeatherData.every((data) => data.temp > thresholdTemp);

  if (consecutiveHighTemps) {
    console.log('Alert! Temperature exceeded threshold.');
    // Trigger notifications here
  }
};

module.exports = { checkAlertConditions };
