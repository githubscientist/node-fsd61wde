// import the express module
const express = require('express');
const companyRouter = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');

// create an express application
const app = express();

// use the express middleware to parse JSON bodies
app.use(express.json());

app.use('/companies', companyRouter);
app.use('/jobs', jobRouter);

// export the express application
module.exports = app;