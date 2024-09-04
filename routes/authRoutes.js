// import the express
const express = require('express');
const authController = require('../controllers/authController');
const auth = require('../utils/auth');

// create a router for the auth routes
const authRouter = express.Router();

// defining the auth routes
// unauthenticated routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

// authenticated routes
authRouter.post('/logout', auth.isAuthenticated, authController.logout);
authRouter.get('/me', auth.isAuthenticated, authController.me);

// export the router
module.exports = authRouter;
