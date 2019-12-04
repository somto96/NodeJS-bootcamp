// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://localhost:27017';

const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client)=> {
    if(error){
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // console.log('connected')

    // db.collection('tasks').findOne({_id: new ObjectID("5de7c54660086c2979bd4343") }, (error, task) => {
    //     if (error){
    //         return console.log('Couldn\'t fetch document');
    //     }

    //     console.log(task);
        
    // })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks);
    })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Buy groceries',
    //         completed: true
    //     },
    //     {
    //         description: 'Go to the Library',
    //         completed: false
    //     },
    //     {
    //         description: 'Laundry and house-keeping',
    //         completed: false
    //     }
    // ],(error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })
})

