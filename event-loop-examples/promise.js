const { readFile } = require('fs');
const { isAsyncFunction } = require('util/types');


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


/* getText('./CONTENT/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err)) */

const start = async () => {
    try {
        const first = await getText("./CONTENT/first.txt")
        const second = await getText("./CONTENT/second.txt")
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}
start()



//////promises
const { readFile, writeFile } = require('fs').promises;


const start = async () => {
    try {
        const first = await readFile("./CONTENT/first.txt", "utf-8")
        const second = await readFile("./CONTENT/second.txt", 'utf-8')
        await writeFile("./CONTENT/test-promise-write.txt", `THISS IS ${first} AND THIS IS ${second}`)
        const third = await readFile("./CONTENT/test-promise-write.txt", 'utf-8')
        console.log(first)
        console.log(second)
        console.log(third)
    } catch (error) {
        console.log(error)
    }
}
start()