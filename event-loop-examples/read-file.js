
const fs = require('fs');
console.log("startes a first task")

fs.readFile('./CONTENT/first.txt', "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data.toString());
    console.log("complete first task ")
});

console.log("start next task")
