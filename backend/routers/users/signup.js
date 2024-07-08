const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { sendSignupVerificationCode } = require('../../core/verification');
const lodash = require('lodash');
const User = require('../../models/user-model');

// Route for user sign-up
router.post('/signup', async (req, res) => {
    try {
        // Extract user details from request body
        const { email, password, fullname, telephone } = req.body;

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
        const verificationCode = await sendSignupVerificationCode(email);

        // Create a new user with verification code and mark them as unverified
        const newUser = await User.create({
            email,
            password: hashedPassword,
            fullname,
            verificationCode, // Store the verification code in the database
            telephone,
            isVerified: false // Mark the user as unverified
        });

        // Send success response
        const user = lodash.pick(newUser, ['id', 'firstname', 'telephone', 'email', 'isVerified']);
        res.status(201).json({ message: 'User signed up successfully. Check your email for verification.', user });

    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
