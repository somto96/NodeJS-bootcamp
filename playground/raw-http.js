const https = require('https');
const url  = "https://api.darksky.net/forecast/3bdd434415b8c7c870aa139be8feed37/6.45, 3.4"
const request = https.request(url, (response) => {
    let data = ""
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        let body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('Error :', error);
})

request.end();