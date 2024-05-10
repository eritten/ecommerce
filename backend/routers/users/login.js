const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const config = require('config');
const User = require('../../models/user');

router.post('/login', async (req, res) => {
    try {
        const { emailOrTelephone, password } = req.body;

        // Find user by email or telephone number
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: emailOrTelephone },
                    { telephone: emailOrTelephone }
                ]
            }
        });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email/telephone or password' });
        }

        // Check if the user is verified
        if (!user.isVerified) {
            return res.status(401).json({ error: 'User account is not verified' });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid email/telephone or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, config.get('token'), { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;