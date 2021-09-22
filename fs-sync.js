///////////////////////////FILE-SYSTEM

const { readFileSync, writeFileSync } = require('fs');
console.log("start")
const first = readFileSync("./CONTENT/first.txt", "utf-8")

//console.log(first)

const second = readFileSync("./CONTENT/second.txt", "utf-8")

//console.log(second)

writeFileSync("./CONTENT/result.txt", `here is the result of ${first} and ${second}`)

//with using flag

writeFileSync("./CONTENT/result.txt", `here is the result of ${first} and ${second}`, { flag: "a" })
console.log("done")
console.log("starting with another task")