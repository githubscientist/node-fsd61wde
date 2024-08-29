const app = require('./app');

// import the mongoose module
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');

// connect to the MongoDB database
mongoose.connect(MONGODB_URI)
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