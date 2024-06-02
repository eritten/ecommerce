const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const authenticateJWT = require('../../middleware/authMiddleware');
const lodash = require('lodash');

router.get('/me', authenticateJWT, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findByPk(userId);
    console.log(user);

    const userData = lodash.pick(user, ['id', 'email', 'telephone', 'fullname']);
    res.json(userData);
});

module.exports = router;