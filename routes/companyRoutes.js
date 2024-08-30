// import the express
const express = require('express');
const companyController = require('../controllers/companyController');

// create a router
const companyRouter = express.Router();

// define the endpoints
companyRouter.get('/', companyController.getCompanies);
companyRouter.get('/search', companyController.searchCompanies);
companyRouter.get('/:id', companyController.getCompany);
companyRouter.post('/', companyController.createCompany);
companyRouter.put('/:id', companyController.updateCompany);
companyRouter.delete('/:id', companyController.deleteCompany);

// export the router
module.exports = companyRouter;