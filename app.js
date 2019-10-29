const getNotes = require('./notes.js');
const chalk = require('chalk')
const yargs = require('yargs')

// Add 
yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe:"Note title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title )
        console.log('Body: ' + argv.body )
    }
})

// Remove
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function(){
        console.log('Remove a note')
    }
})

// List
yargs.command({
    command: "list",
    describe: "List a note",
    handler: function(){
        console.log('List a note')
    }
})

// Read
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function(){
        console.log('Read a note')
    }
})


// console.log(yargs.argv)
yargs.parse()
// var notes = getNotes()

// console.log(chalk.green(notes));
// console.log(chalk.blue.bold.inverse(notes));
// console.log(chalk.white.inverse(notes));

// console.log(process.argv[2])





// const fs = require('fs');
// var text = 'I\'m a noob in nodejs';
// fs.appendFileSync('notes.txt', ` ${text}`);