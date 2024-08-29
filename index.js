const companies = [
    {
        id: 1,
        name: "Google",
        location: "Mountain View, California",
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

// create an express application
const app = express();

// use the express middleware to parse JSON bodies
app.use(express.json());

app.get('/companies', (req, res) => {
    res.json(companies);
})

// define the routes and their respective handlers
app.post('/companies', (req, res) => {
    const company = req.body;

    company.id = companies[companies.length - 1].id + 1;
    company.createdAt = new Date().toISOString();
    company.updatedAt = new Date().toISOString();

    companies.push(company);

    res.json({ message: "Company created successfully" });
})

// start the server by listening on a port for incoming requests
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});