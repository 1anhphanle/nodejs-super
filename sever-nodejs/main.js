//Đây là module có sẵn để tạo server nodejs
const http = require('http')
const PORT = 4000

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.end(`{"messege": "Hello World!"}`)
})

// console.log(http)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})