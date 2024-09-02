// import the express module
const express = require('express');
const companyRouter = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

// create an express application
const app = express();

// use the express middleware to parse JSON bodies
app.use(express.json());

// use the cookie parser middleware
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/companies', companyRouter);
app.use('/jobs', jobRouter);

// export the express application
module.exports = app;