const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

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

            // encrypt the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user object
            const newUser = new User({ name, email, password: hashedPassword });

            // save the user to the database
            await newUser.save();

            // send a success response
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        // extract user details from the request body
        const { email, password } = req.body;

        // check if the user exists in the database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // generate a token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '3h' });

        // store the token in the httpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: "true",
            sameSite: "None"
        });

        // send a success response
        res.status(200).json({ message: 'User logged in successfully' });
    },
    logout: async (req, res) => {
        // remove the token from the httpOnly cookie
        res.clearCookie('token');

        // send a success response
        res.status(200).json({ message: 'User logged out successfully' });
    },
    me: async (req, res) => {
        // extract the user id from the request object
        const userId = req.userId;

        // find the user in the database
        const user = await User.findById(userId).select('-password -__v -createdAt -updatedAt');

        // send the user details in the response
        res.status(200).json(user);
    }
}

module.exports = authController;