const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/task-manager-api';

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed:{
        type: Boolean
    }
});

const task = new Tasks({
    description: 'Playing games',
    completed: true
});

task.save().then(()=>{
    console.log(task);
}).catch((error)=>{
    console.log(error);
})

