const mongoose = require('mongoose');
// const validator = require('validator');
const url = 'mongodb://localhost:27017/task-manager-api';

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});



// const me = new User({
//     name: 'Alex   ',
//     email: 'Alex123@GMAIL.COM     ',
//     password: 'alex123'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error!', error);
// })

  

// const task = new Tasks({
//     description: 'Go to the supermarket     ',
// });

// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log(error);
// })

