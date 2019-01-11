const express = require('express')
const router = express.Router();

router.get('/hello', (req, res, next) => {
    try {
        res.status(200).send("Hello world");
    } catch (e) {
        res.json({ error: { msg: _.get(e, 'message', 'Unknown error') } });
    }
});

router.get('/login', (req, res, next) => {
    try {
        res.status(200).send("Hello world");
    } catch (e) {
        res.json({ error: { msg: _.get(e, 'message', 'Unknown error') } });
    }
});

module.exports = router;
