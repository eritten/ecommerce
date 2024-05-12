const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user');

router.post('/change-reset-password', async (req, res) => {
    try {
        const { email, newPassword, resetCode } = req.body;

        // Retrieve user from the database based on email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify the reset code
        const isCodeValid = await verifyResetPasswordCode(email, resetCode);
        if (!isCodeValid) {
            return res.status(401).json({ error: 'Invalid reset code or expired' });
        }

        // Ensure new password is different from previous one
        const isSamePassword = await bcrypt.compare(newPassword, user.password);
        if (isSamePassword) {
            return res.status(400).json({ error: 'New password must be different from the previous one' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password in the database
        await User.update({ password: hashedPassword }, { where: { id: user.id } });

        // Respond with success message
        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing reset password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
