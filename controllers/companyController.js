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

// create the company controller
const companyController = {
    getCompanies: (req, res) => {
        res.json(companies);
    },
    searchCompanies: (req, res) => {
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
    },
    getCompany: (req, res) => {
        const id = parseInt(req.params.id);

        const company = companies.find(com => com.id === id);

        if (!company) {
            res.json({ message: "Company not found" });
        } 

        res.json(company);
    },
    createCompany: (req, res) => {
        const company = req.body;

        company.id = companies[companies.length - 1].id + 1;
        company.createdAt = new Date().toISOString();
        company.updatedAt = new Date().toISOString();

        companies.push(company);

        res.json({ message: "Company created successfully" });
    },
    updateCompany: (req, res) => {
        const id = parseInt(req.params.id);

        const { name } = req.body;

        const company = companies.find(com => com.id === id);

        company.name = name;

        companies = companies.map(com => com.id === id ? company : com);

        res.json({ message: "Company updated successfully" });
    },
    deleteCompany: (req, res) => {
        const id = parseInt(req.params.id);

        companies = companies.filter(com => com.id !== id);

        res.json({ message: "Company deleted successfully" });
    }
}

// export the company controller
module.exports = companyController;