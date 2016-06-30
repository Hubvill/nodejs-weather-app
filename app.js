var weather = require('./weather');

// Get your own api key from http://api.openweathermap.org
var APIKEY = 'APIKEY';

// Enter a country code (us, ca, etc)
var location = 'Country Code';

// Enter a postalcode (94043, 48104, etc)
var postalCode = 'postalCode';

weather.getWeather(location, postalCode, APIKEY);

