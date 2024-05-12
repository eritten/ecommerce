const express = require('express');
const router = express.Router();
const { sendPasswordResetVerificationCode } = require('../../core/verification');
const User = require('../../models/user');

router.post('/reset-password', async (req, res) => {
    try {
        // Extract email from the request body
        const { email } = req.body;

        // Check if the user with the provided email exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate and send a password reset verification code
        const verificationCode = await sendPasswordResetVerificationCode(email);

        // Return success response
        res.status(200).json({ message: 'Password reset verification code sent successfully', verificationCode });
    } catch (error) {
        console.error('Error sending password reset verification code:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;