const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Home page');
})

app.get('/help', (req, res) => {
    res.send('Help page');
})

app.get('/about', (req, res) => {
    res.send('<h1> About us </h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Lagos/Nigeria '
    });
})

app.listen(3000, () => {
    console.log('Server is listening at localhost:3000');
})