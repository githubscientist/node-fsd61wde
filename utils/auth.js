const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');
const User = require('../models/user');

const auth = {
    // Middleware to check if the user is authenticated
    isAuthenticated: (req, res, next) => {
        try {
            // extract the token from the httpOnly cookie
            const token = req.cookies.token;

            // check if the token exists
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            // verify the token
            jwt.verify(token, JWT_SECRET, (error, user) => {
                if (error) {
                    return res.status(403).json({ message: 'Invalid token' });
                }

                // store the user object in the request object
                req.userId = user.id;


                // call the next middleware
                next();
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Middleware to check if the user is an admin
    isAdmin: async (req, res, next) => {
        try {
            // extract the userId from the request object
            const { userId } = req;

            // get the user from the database
            const user = await User.findById(userId);

            // check if the user is an admin
            if (user.role !== 'admin') {
                return res.status(403).json({ message: 'Forbidden' });
            }

            // call the next middleware
            next();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = auth;