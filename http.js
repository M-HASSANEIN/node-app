const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("welcome to the Home page ")
    }
    else if (req.url === "/about") {
        res.end("welcome to Our history page")
    }

    else {
        res.end(`<h1>NO PAGE FOUND </h1>
    <a href="/">go to home page</a>
    `)
    }


})

server.listen(5000)