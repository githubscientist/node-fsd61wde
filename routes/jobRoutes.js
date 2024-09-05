const express = require('express');
const jobController = require('../controllers/jobController');
const auth = require('../utils/auth');

const jobRouter = express.Router();

// define the endpoints for the jobRouter
jobRouter.get('/', jobController.getJobs);
jobRouter.post('/company/:companyId', auth.isAuthenticated, auth.isAdmin, jobController.createJob);
jobRouter.get('/applied', auth.isAuthenticated, jobController.getAppliedJobs);
jobRouter.post('/:id/apply', auth.isAuthenticated, jobController.applyJob);
jobRouter.get('/:id', jobController.getJob);
jobRouter.put('/:id', auth.isAuthenticated, auth.isAdmin, jobController.updateJob);
jobRouter.delete('/:id', auth.isAuthenticated, auth.isAdmin, jobController.deleteJob);

module.exports = jobRouter;