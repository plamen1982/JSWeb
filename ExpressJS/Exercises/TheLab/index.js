const http = require('http');
const port = 3000;
const home = require('./handlers');

http.createServer((req, res) => {
    home.handler(req, res);
}).listen(port, () => {
    console.log(`The server is listening on port: ${port}`)
});