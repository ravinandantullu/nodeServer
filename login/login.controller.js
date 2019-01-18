const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../_helpers/db');

router.post('/', login);

function login(req, res, next) {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    db.getUserData(req, res, next)
        .then((value) => {
            if (value.filter((l) => (l.username === user.username && l.password === user.password)).length === 1) {
                try {
                    jwt.sign({ user }, 'ravinandan', { expiresIn: '3600s' }, (err, token) => { res.json({ token }); });
                } catch (e) {
                    res.json({ error: 'hello  omessage Unknown error' });
                }
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        });
}

module.exports = router;


