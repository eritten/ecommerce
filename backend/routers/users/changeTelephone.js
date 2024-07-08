const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const config = require('config');
const User = require('../../models/user-model');
const authenticateJWT = require('../../middleware/authMiddleware');

// Update telephone number route
router.put('/change-telephone', authenticateJWT, async (req, res) => {
    try {
        const { newTelephoneNumber } = req.body;
        const userId = req.user.id;

        // Find the user by userId
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the telephone number
        user.telephone = newTelephoneNumber;
        await user.save();

        res.json({ message: 'Telephone number updated successfully' });
    } catch (error) {
        console.error('Error updating telephone number:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;