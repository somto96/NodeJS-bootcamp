// const request = require('request');

/**
 * Author: Somtochukwu Ezerioha
 * To insert location type this in your command line. Example: node app.js Lagos
 */
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2]

if (!address) {
    console.log("Please enter an address.")
} else {
    geocode(address, (error, { latitude, longitude, Location:location }) => {

        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error: ', error);
            }
            console.log('Location: ', location);
            console.log('Forecast: ', forecastData);
        })
    })
}