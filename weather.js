var http = require('http');

// Print success message with weather info
function printMessage(weather, country, postalCode) {
	var message = 'Postal Code: ' + postalCode + '\n' +
		'Country: ' + weather.sys.country + '\n' +
		'Current Temp: ' + weather.main.temp + '\n' +
		'Temp (high): ' + weather.main.temp_max + '\n' +
		'Temp (low): ' + weather.main.temp_min + '\n' +
		'Humidity: ' + weather.main.humidity + '\n';
	console.log(message);
}

// Print out error messages
function printError(error) {
	console.error(error.message);
}

function getWeather(country, postalCode, APIKEY) {

	// Connect to weather app
	var request = http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + postalCode + ',' + country + '&appid=' + APIKEY, function (response) {
		var body = '';

		// Read the data
		response.on('data', function (chunk) {
			body += chunk;
		});

		response.on('end', function () {
			if (response.statusCode === 200) {
				try {
					// Parse JSON
					var weather = JSON.parse(body);
					// Print Data
					printMessage(weather, country, postalCode);
				} catch(error) {

				}
			} else {
				// Status Code Error
				printError({message: 'There was an error getting the weather for ' + country + ' with the postal code ' + postalCode + ' (' + http.STATUS_CODES[response.statusCode] + ')'});
			}
			
		});

	});

}

module.exports.getWeather = getWeather;