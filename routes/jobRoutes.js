const express = require('express');
const jobController = require('../controllers/jobController');

const jobRouter = express.Router();

// define the endpoints for the jobRouter
jobRouter.get('/', jobController.getJobs);
jobRouter.post('/company/:companyId', jobController.createJob);

module.exports = jobRouter;