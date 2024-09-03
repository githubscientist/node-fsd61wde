// import the express module
const express = require('express');
const companyRouter = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create an express application
const app = express();

// use the cors middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// use the express middleware to parse JSON bodies
app.use(express.json());

// use the cookie parser middleware
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/companies', companyRouter);
app.use('/jobs', jobRouter);

// export the express application
module.exports = app;