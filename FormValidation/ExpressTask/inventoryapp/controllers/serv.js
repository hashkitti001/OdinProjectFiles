const http = require("http")

const PORT = 8000;

const server = http.createServer((req, res) => {
    const {method, url} = req
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World!")
    console.log(method)
    console.log(url)
})
server.listen(PORT, () => {
    console.log(`On port ${PORT}`)
})