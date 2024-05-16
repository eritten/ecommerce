const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const authenticateJWT = require('../../middleware/authMiddleware');
const lodash = require('lodash');

router.post('/me', authenticateJWT, async (req, res) => {
    const userId = req.user.id;
    const user = await User.findOne({ id: userId });
    const userData = lodash.pick(user, ['id', 'email', 'telephone', 'fullname']);
    res.json(userData);
});