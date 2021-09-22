//Modules in nodes
const Names = require('./names');
const sayHi = require('./utils');
const items = require('./alternative');
console.log(Names);
console.log(sayHi);

sayHi("momo");
sayHi(Names.john);
sayHi(Names.peter);

require('./mindgrenade');