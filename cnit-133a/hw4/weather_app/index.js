const request = require('request');
const argv = require('yargs').argv;

let apiKey = '2ab86d863fb78dddb0bdee6277af6dc0';
let city = argv.c || 'San Francisco';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let report = JSON.parse(body);
        let msg = `It is ${report.main.temp} Celsius in ${report.name}. The min temperature is ${report.main.temp_min} degrees, and the max temperature is ${report.main.temp_max} degrees.`;
        console.log(msg);
    }
});