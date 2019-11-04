const request = require('request');

// var url = "https://api.darksky.net/forecast/3bdd434415b8c7c870aa139be8feed37/6.5244,3.3792"

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     console.log(
//         `
//             It is currently ${response.body.currently.temperature} degrees out.
//             There is a ${response.body.currently.precipProbability}% chance of rain

//         `);
// })

var geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic29tdG85NiIsImEiOiJjazJrOHdvOWIxMDRsM2pvMDhpdGcxMG14In0.L0lWaue08HMjJbSJZUZA5Q&limit=1"
request({
    url: geocodeUrl,
    json: true
}, (error, response) => {
  
    
    if (error) {
        console.log("Unable to connect to location services");
    }else if(response.body.features.length === 0){
        console.log("Invalid search term. Please use another search term");
    }else{
        let longitude = response.body.features[0].center[0];
        let latitude = response.body.features[0].center[1];
        console.log(latitude, longitude);
    }
})