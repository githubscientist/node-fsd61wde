// import the express
const express = require('express');
const authController = require('../controllers/authController');

// create a router for the auth routes
const authRouter = express.Router();

// defining the auth routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/me', authController.me);

// export the router
module.exports = authRouter;
