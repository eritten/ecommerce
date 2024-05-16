const express = require('express');
const config = require('config');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Import JWT module
const User = require('../../models/user');

// Route to verify the verification code
router.post('/verify', async (req, res) => {
    try {
        // Extract email and verification code from the request body
        const { email, verificationCode } = req.body;

        // Find the user by email and verification code
        const user = await User.findOne({ where: { email } });
        console.log(user.verificationCode)
        if (!user) {
            return res.status(404).json({ error: 'User cannot be found' });
        }
        if (user.verificationCode != verificationCode) {
            return res.status(401).json({ error: 'Invalid verification code' });
        }

        // Update the user's isVerified field to true
        user.verificationCode = "";
        user.isVerified = true;
        await user.save();

        // Generate JWT token for user authentication
        const token = jwt.sign({ userId: user.id }, config.get('token'), { expiresIn: '1h' });

        // Return success response with token
        res.status(200).json({ message: 'Verification successful', token });
    } catch (error) {
        console.error('Error verifying verification code:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;