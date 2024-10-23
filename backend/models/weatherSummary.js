const mongoose = require('mongoose');

const weatherSummarySchema = new mongoose.Schema({
  city: String,
  avgTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  dominantWeather: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WeatherSummary', weatherSummarySchema);
