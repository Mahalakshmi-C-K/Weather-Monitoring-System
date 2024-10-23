const Weather = require('../models/Weather');

const checkAlertConditions = async () => {
  const thresholdTemp = 35; // Example threshold
  const thresholdCount = 2;

  const latestWeatherData = await Weather.find().sort({ dt: -1 }).limit(thresholdCount);

  const consecutiveHighTemps = latestWeatherData.every((data) => data.temp > thresholdTemp);

  if (consecutiveHighTemps) {
    // Trigger alert logic here, e.g., send an email or log alert
    console.log('Alert! Temperature exceeded threshold.');
  }
};

module.exports = { checkAlertConditions };
