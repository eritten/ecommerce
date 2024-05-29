const jwt = require('jsonwebtoken');
const config = require('config');

function authenticateJWT(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        res.status(401).json({ "message": "Authorization header is required" })
        return
    }

    try {
        const decoded = jwt.verify(token, config.get("token"));
        req.user = decoded;
        next()
    }
    catch (e) {
        res.status(401).json({ "message": "Token invalid" })
    }
}

module.exports = authenticateJWT;