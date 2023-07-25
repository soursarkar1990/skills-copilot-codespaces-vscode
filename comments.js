// create a web server and listen to incoming request
// 1. require http module
const http = require('http');
// 2. create a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/comments') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
// 3. listen to incoming request
server.listen(3000);
console.log('Listening on port 3000...');

// Path: comments.js
// create a web server and listen to incoming request
