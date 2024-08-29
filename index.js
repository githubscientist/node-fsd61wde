let companies = [
    {
        id: 1,
        name: "Google",
        location: "Seattle, Washington",
        email: "careers@google.com",
        phone: "650-253-0000",
        website: "https://careers.google.com",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z"
    },
    {
        id: 2,
        name: "Facebook",
        location: "Menlo Park, California",
        email: "careers@facebook.com",
        phone: "650-543-4800",
        website: "https://www.facebook.com/careers",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z"
    },
    {
        id: 3,
        name: "Amazon",
        location: "Seattle, Washington",
        email: "careers@amazon.com",
        phone: "206-266-1000",
        website: "https://www.amazon.jobs",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z"
    },
];

// import the express module
const express = require('express');

// import the mongoose module
const mongoose = require('mongoose');

// import the dotenv module
require('dotenv').config();

// connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to the MongoDB database");
    })
    .catch((err) => {
        console.log("Error connecting to the MongoDB database", err);
    });

// create an express application
const app = express();

// use the express middleware to parse JSON bodies
app.use(express.json());

app.get('/companies', (req, res) => {
    res.json(companies);
});

app.get('/companies/search', (req, res) => {
    const { id, name, location } = req.query;
    let company;

    if (id) {
        company = companies.find(com => com.id === parseInt(id));
    }

    if (location && !name) {
        company = companies.filter(com => com.location.toLowerCase() === location.toLowerCase());
    }

    if (location && name) {
        company = companies.filter(com => com.location.toLowerCase() === location.toLowerCase());
        company = company.filter(com => com.name.toLowerCase() === name.toLowerCase());
    }

    if (!company) {
        res.json({ message: "Company not found" });
    }

    res.json(company);
});

app.get('/companies/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const company = companies.find(com => com.id === id);

    if (!company) {
        res.json({ message: "Company not found" });
    } 

    res.json(company);
});

// define the routes and their respective handlers
app.post('/companies', (req, res) => {
    const company = req.body;

    company.id = companies[companies.length - 1].id + 1;
    company.createdAt = new Date().toISOString();
    company.updatedAt = new Date().toISOString();

    companies.push(company);

    res.json({ message: "Company created successfully" });
});

app.put('/companies/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const { name } = req.body;

    const company = companies.find(com => com.id === id);

    company.name = name;

    companies = companies.map(com => com.id === id ? company : com);

    res.json({ message: "Company updated successfully" });
});

app.delete('/companies/:id', (req, res) => {
    const id = parseInt(req.params.id);

    companies = companies.filter(com => com.id !== id);

    res.json({ message: "Company deleted successfully" });
});

// start the server by listening on a port for incoming requests
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});