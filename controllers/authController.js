const User = require('../models/user');

const authController = {
    register: async (req, res) => {
        try {
            // extract user details from the request body
            const { name, email, password } = req.body;

            // check if the user already exists
            const userExists = await User.findOne({ email });

            if (userExists) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // create a new user object
            const newUser = new User({ name, email, password });

            // save the user to the database
            await newUser.save();

            // send a success response
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {

    },
    logout: async (req, res) => {

    },
    me: async (req, res) => {

    }
}

module.exports = authController;