function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = req.headers['authorization'].split(' ')[1];
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    verifyToken
}