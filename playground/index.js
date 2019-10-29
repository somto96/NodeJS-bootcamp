var fs = require('fs');

var person = {
    name: "Andrew",
    planet: "Earth",
    age: 27
}

// var personJSON = JSON.stringify(person)
// console.log(personJSON)
// var parsedData = fs.writeFileSync('test.json', personJSON)
var bufferedData = fs.readFileSync('test.json')
// console.log(bufferedData)
var dataJSON = JSON.parse(bufferedData)
// console.log(dataJSON)
dataJSON.name = "Somto";
dataJSON.age = 23
// console.log(dataJSON)
var dataStringify = JSON.stringify(dataJSON)
var writeData = fs.writeFileSync('test.json', dataStringify)
console.log(writeData)