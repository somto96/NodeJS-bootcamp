const path = require('path')
const express = require('express');

const publicDir = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicDir));

app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: "Somto Ezerioha"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Somto Ezerioha',
        description: "Hi, I'm Somtochukwu Ezerioha. A full stack-developer with over 3 years of experience."
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        disclaimer: 'This is our help page',
        copyright: 'Somto Ezerioha @ 2019',
        description: "Oops! this page is still under construction. Check back later."
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Lagos/Nigeria '
    });
})

app.listen(3000, () => {
    console.log('Server is listening at localhost:3000');
})