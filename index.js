const app = require('./app');

// import the mongoose module
const mongoose = require('mongoose');

// import the dotenv module
require('dotenv').config();

// connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to the MongoDB database");

        // start the server by listening on a port for incoming requests
        app.listen(3001, () => {
            console.log("Server is running on http://localhost:3001");
        });
    })
    .catch((err) => {
        console.log("Error connecting to the MongoDB database", err);
    });