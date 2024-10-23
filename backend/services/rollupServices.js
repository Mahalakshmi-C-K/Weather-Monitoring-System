const WeatherSummary = require('../models/weatherSummary');
const Weather = require('../models/weatherSummary');

const rollupDailyWeather = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const weatherData = await Weather.aggregate([
    { $match: { dt: { $gte: startOfDay.getTime() / 1000 } } },
    {
      $group: {
        _id: "$city",
        avgTemp: { $avg: "$temp" },
        maxTemp: { $max: "$temp" },
        minTemp: { $min: "$temp" },
        dominantWeather: { $first: "$main" },
      },
    },
  ]);

  for (let data of weatherData) {
    const summary = new WeatherSummary({
      city: data._id,
      avgTemp: data.avgTemp,
      maxTemp: data.maxTemp,
      minTemp: data.minTemp,
      dominantWeather: data.dominantWeather,
    });
    await summary.save();
  }
};

module.exports = { rollupDailyWeather };
