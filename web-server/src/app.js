/**
 * Author: Somtochukwu Ezerioha
 */
const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();

// Defining paths for Express config
const publicDir = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setting up handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setting up static directory to serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: "Somto Ezerioha @ 2019"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Somto Ezerioha @ 2019',
        description: "Hi, I'm Somtochukwu Ezerioha. A full stack-developer with over 3 years of experience."
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'This is our help page',
        name: 'Somto Ezerioha @ 2019',
        description: "Oops! this page is still under construction. Check back later."
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Lagos/Nigeria '
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        text: "Help article not found",
        name: 'Somto Ezerioha @ 2019'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        text: "Page not found",
        name: 'Somto Ezerioha @ 2019'
    });
});

app.listen(3000, () => {
    console.log('Server is listening at localhost:3000');
})