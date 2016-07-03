var weather = require('./weather');

// Get your own api key from http://api.openweathermap.org
var APIKEY = 'APIKEY';

var params = process.argv.slice(2);

var country = params[0];
var postalCode = params[1];

weather.getWeather(country, postalCode, APIKEY);
