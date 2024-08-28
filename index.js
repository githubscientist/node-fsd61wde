// import the express module
const express = require('express');

// create an express application
const app = express();

// define the routes and their corresponding functions
app.get('/', (req, res) => {
    res.send("GET World!");
});

app.post('/', (req, res) => {
    res.send("POST World!");
});

app.get('/test', (req, res) => {
    res.send("GET Test!");
});

// start the server by listening on a port for incoming requests
app.listen(3001, "localhost", () => {
    console.log("Server is running on http://localhost:3001");
});