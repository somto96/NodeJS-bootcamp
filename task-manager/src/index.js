const express = require('express');
require('./db/mongoose.js'); // Ensures mongoose connects to the DB
const User = require('./models/user');
const Task = require('./models/task');

const app = express();

const port = process.env.PORT||3000;

// Snippet in the next line parses incoming JSON into an object 
app.use(express.json());



// Create user endpoint
app.post('/users', (req, res)=>{
    const user = new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((error)=> {
        res.status(400).send(error);
    })
    // console.log(req.body); // Outputs the incoming JSON from POST request already stored in an object
    // res.send('testing!');
})

// Get all users endpoint
app.get('/users',(req, res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((e)=>{
        res.status(500).send()
    })
})

// Get user by id endpoint
app.get('/users/:id', (req, res)=>{
    const _id = req.params.id;

    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send();
        }
        
        res.send(user);
    }).catch((e)=>{
        res.status(500).send();
    })
})

// Create task endpoint 
app.post('/tasks', (req, res)=>{
    const task = new Task(req.body);
    task.save().then(()=>{
        res.status(201).send(task);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

// Read all tasks endpoint
app.get('/tasks', (req, res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
        res.status(500).send();
    })
})

// Read a single task endpoint
app.get('/tasks/:id', (req, res)=>{
    const _id = req.params.id;
    Task.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send();
        }

        res.send(task)
    }).catch((e)=>{
        res.status(500).send();
    })
})


app.listen(port, () =>{
    console.log('Server is up on port ' + port);
})