const request = require('request');

const forecast = (lat, long, callback) => {
    var url = `https://api.darksky.net/forecast/3bdd434415b8c7c870aa139be8feed37/${encodeURIComponent(lat)}, ${encodeURIComponent(long)}`

    request({
        url: url,
        json: true
    }, (error, response) => {
        if(error){
            callback('Can\'t connect to weather services', undefined);
        }else if (response.body.error){
            callback('Invalid coordinates!', undefined);
        }else{
            callback(undefined, ` It is currently ${response.body.currently.temperature} degrees out here in ${response.body.timezone}.
            There is a ${response.body.currently.precipProbability}% chance of rain`)
        };
       
    })
}

module.exports = forecast;