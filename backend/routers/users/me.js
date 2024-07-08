const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user-model');
const authenticateJWT = require('../../middleware/authMiddleware');
const lodash = require('lodash');

router.get('/me', authenticateJWT, async (req, res) => {
    const userId = req.user.id;
    const user = await User.findByPk(userId);
    const userData = lodash.pick(user, ['id', 'email', 'telephone', 'fullname', 'createdAt', 'profileImageUrl']);
    res.json(userData);
});

module.exports = router;