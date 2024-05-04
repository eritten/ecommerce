const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const config = require('config');
const User = require('../../models/User');
const authenticateJWT = require('../../middleware/authMiddleware');

// Delete user account route
router.delete('/delete-user', authenticateJWT, async (req, res) => {
    try {
        const userId = req.user.userId;

        // Find the user by userId
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Delete the user account
        await user.destroy();

        res.json({ message: 'User account deleted successfully' });
    } catch (error) {
        console.error('Error deleting user account:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
