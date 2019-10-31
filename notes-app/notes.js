const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    var notes = loadNotes()
    var repeatedNote = notes.find((note) => note.title === title)
    // console.log(notes)
    if (!repeatedNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Warning: Repeated note!"));
    }

    saveNotes(notes)
}

const removeNotes = (title) => {
    var notes = loadNotes()
    var notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"));
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }
    /**
     * Commented snippet is an alternative solution if you made note.title === title
    if(removedNotes.length !== 0){
        var titleIndex = notes.findIndex(note=> note.title === title );
        notes.splice(titleIndex, 1);
        console.log("Note deleted!")
    }else{
        console.log("Nothing to delete!")
    };
     */

    saveNotes(notesToKeep)
}

const listNotes = () => {
    var notes = loadNotes()
    notes.forEach(element => console.log(element.title))
}

const readNotes = (title)=> {
    var notes = loadNotes();
    var noteSearch = notes.find((note) => note.title === title)
    // console.log(notes)
    if (noteSearch) {
     console.log(chalk.inverse(noteSearch.title))
     console.log(noteSearch.body)
    } else {
        console.log(chalk.red.inverse("Error! No note found!"));
    }
}

const saveNotes = (notes) => {
    var noteJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", noteJSON)
}
const loadNotes = () => {
    try {
        var dataBuffer = fs.readFileSync('notes.json')
        var dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}