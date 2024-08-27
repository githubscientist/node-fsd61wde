// create a server
const http = require('http'); // CommonJS module import syntax
// import http from 'http'; // ES6 module import syntax

// create a server object
const server = http.createServer((request, response) => {
    const { url, method } = request;

    if (url === '/') {
        if(method === 'GET') {
            return response.end('GET World!');
        } else if(method === 'POST') {
            return response.end('POST World!');
        }
    } else if(url === '/test') {
        return response.end('TEST World!');
    } else {
        return response.end('Endpoint not found');
    }
});

// start the server listening for requests
server.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});