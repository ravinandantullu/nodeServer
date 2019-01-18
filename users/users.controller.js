const express = require('express');
const router = express.Router();
const jwtHelper = require('../_helpers/jwtHelper');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const db = require('../_helpers/db');

// routes
router.post('/register', jwtHelper.verifyToken, db.registerUser);

module.exports = router;
