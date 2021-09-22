//////////////////////////////path in Node.

const path = require('path');

//console.log(path.sep)

const filepath = path.join("/CONTENT", "subfolder", "test.txt")

//console.log(filepath)

const base = path.basename(filepath)

//console.log(base)

const absolute = path.resolve(__dirname, "CONTENT", "subfolder", "test.txt")

//console.log(absolute)