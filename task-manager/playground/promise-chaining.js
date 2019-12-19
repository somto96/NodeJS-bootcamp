require('../src/db/mongoose'); 

const User = require('../src/models/user');
const Task = require('../src/models/task');

// 5df0f1915633f66311e078e5

// 5df2635fca85fd0a4e94e1e5

// User.findByIdAndUpdate('5df0f1915633f66311e078e5', {age: 1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age: 1});
// }).then((result) =>{
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

Task.findByIdAndUpdate('5df2635fca85fd0a4e94e1e5', {completed: true}).then((task) => {
    console.log(task);
    return Task.countDocuments({completed: true});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})