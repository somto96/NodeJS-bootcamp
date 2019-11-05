const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

forecast(3, 4, (error, response) => {
    console.log('Error: ', error);
    console.log('Result: ', response);
})

geocode("Lagos", (error, response) => {
    console.log('Error: ', error);
    console.log('Data: ', response);
})