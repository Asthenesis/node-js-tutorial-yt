const http = require('http')

const server = http.createServer((req, res) => {
    console.error('request event')
    res.end('hello world')
})


server.listen(5000, () => {
    console.error('server is listening on port: 5000.....')
})