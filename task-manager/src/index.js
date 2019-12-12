const express = require('express');
require('./db/mongoose.js'); // Ensures mongoose connects to the DB
const User = require('./models/user');
const Task = require('./models/task');

const app = express();

const port = process.env.PORT||3000;

// line 10 parses incoming JSON into an object 
app.use(express.json());

// Create user endpoint
app.post('/users', (req, res)=>{
    const user = new User(req.body);

    user.save().then(()=>{
        res.send(user);
    }).catch((error)=> {
        res.status(400).send(error);
    })
    // console.log(req.body); // Outputs the incoming JSON from POST request already stored in an object
    // res.send('testing!');
})

// Create task endpoint
app.post('/tasks', (req, res)=>{
    const task = new Task(req.body);
    task.save().then(()=>{
        res.send(task);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.listen(port, () =>{
    console.log('Server is up on port ' + port);
})