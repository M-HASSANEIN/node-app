const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise("./CONTENT/first.txt", "utf-8")
        const second = await readFilePromise("./CONTENT/second.txt", 'utf-8')
        await writeFilePromise("./CONTENT/test-promise-write.txt", `THISS IS ${first} AND THIS IS ${second}`)
        const third = await readFilePromise("./CONTENT/test-promise-write.txt", 'utf-8')
        console.log(first)
        console.log(second)
        console.log(third)
    } catch (error) {
        console.log(error)
    }
}
start()