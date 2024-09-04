// import the Company model
const Company = require('../models/company');

// create the company controller
const companyController = {
    getCompanies: async (req, res) => {
        try {
            const companies = await Company.find().populate('jobs', '-companyId -__v');

            res.status(200).json(companies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    searchCompanies: async (req, res) => {
        const { name, location } = req.query;

        const companies = await Company.find({
            $and: [
                {
                    name: {
                        $regex: name,
                        $options: 'i'
                    }
                },
                {
                    location: {
                        $regex: location,
                        $options: 'i'
                    }
                },
            ]
        });

        res.status(200).json(companies);
    },
    getCompany: async (req, res) => {
        try {
            const { id } = req.params;

            const company = await Company.findById(id).populate('jobs', '-companyId -__v');

            if (!company) {
                return res.status(404).json({ message: "Company not found" });
            }

            res.status(200).json(company);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createCompany: async (req, res) => {
        try {
            const company = req.body;

            // create a new company
            const newCompany = new Company(company);

            // save the company
            const savedCompany = await newCompany.save();

            res.status(201).json({ message: "Company created successfully", company: savedCompany });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateCompany: async (req, res) => {
        try {
            const { id } = req.params;

            const { name, location, email, phone, website } = req.body;

            const companyToUpdate = {
                name,
                location,
                email,
                phone,
                website
            }

            const updatedCompany = await Company.findByIdAndUpdate(id, companyToUpdate, { new: true });

            if (!updatedCompany) {
                return res.status(404).json({ message: "Company not found" });
            }

            res.status(200).json({ message: "Company updated successfully", company: updatedCompany });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },
    deleteCompany: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedCompany = await Company.findByIdAndDelete(id);

            if (!deletedCompany) {
                return res.status(404).json({ message: "Company not found" });
            }

            res.status(200).json({ message: "Company deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getCompanyJobs: async (req, res) => {
        try {
            const { id } = req.params;

            const company = await Company.findById(id).populate('jobs', '-companyId -__v');

            if (!company) {
                return res.status(404).json({ message: "Company not found" });
            }

            res.status(200).json(company.jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

// export the company controller
module.exports = companyController;