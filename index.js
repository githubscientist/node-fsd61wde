// import the express module
const express = require('express');

// create an express application
const app = express();

// define the routes and their respective handlers
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// start the server by listening on a port for incoming requests
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});