const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { sendVerificationCode } = require('../../core/verification'); // Import the sendVerificationCode function
const lodash = require('lodash');
const User = require('../../models/user');


// Route for user sign-up
router.post('/signup', async (req, res) => {
    try {
        // Validate user sign-up data


        // Extract validated user details
        const { email, password, firstname, lastname, telephone } = req.body;

        // Check if user with the given email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(401).json({ error: 'Email already exists' });
        }

        // Check if user with the given telephone number already exists
        const existingTelephone = await User.findOne({ where: { telephone } });
        if (existingTelephone) {
            return res.status(401).json({ error: 'Telephone number already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate verification code and send it to the user's email
        const verificationCode = await sendVerificationCode(email);

        // Create a new user with verification code and mark them as unverified
        const newUser = await User.create({
            email,
            password: hashedPassword,
            firstname,
            lastname,
            verificationCode, // Store the verification code in the database
            telephone,
            isVerified: false // Mark the user as unverified
        });
        const user = lodash.pick(newUser, ['id', 'firstname', 'telephone', 'email', 'isVerified']);
        // Send success response
        res.status(201).json({ message: 'User signed up successfully. Check your email for verification.', user: user });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;