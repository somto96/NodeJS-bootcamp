const express = require('express');
require('./db/mongoose.js'); // Ensures mongoose connects to the DB
// const User = require('./models/user');
// const Task = require('./models/task');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task')

const app = express();


const port = process.env.PORT || 3000;

// Express Middleware Function to disable all request methods
// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintenance. Please check back later!');
// })

// Snippet in the next line parses incoming JSON into an object 
app.use(express.json());

// Routes for endpoints
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
})