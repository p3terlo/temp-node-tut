const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page')
    } else if (req.url === '/about') {
        res.end('About page')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>Page not found</p>
            <a href='/'>Home page</a>
        `)
    }
})

server.listen(3000)