const { readFile, writeFile } = require("fs");

readFile('./CONTENT/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    readFile("./CONTENT/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile("./CONTENT/result-async.txt", `HERE IS THE RESULT:${first} AND ${second} `, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })


})
