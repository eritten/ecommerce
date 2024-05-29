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
            return res.status(401).json({ error: 'Invalid email/telephone' });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password for the specified user' });
        }

        // Check if the user is verified
        if (!user.isVerified) {
            return res.status(401).json({ error: 'User account is not verified' });
        }


        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, config.get('token'));

        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;