const express = require('express');
const router = express.Router();
// controllers
const { registerUser, loginUser, verifyUser, getName } = require('../controllers/userController');

// register
router.route('/api/register').post(registerUser);

// login
router.route('/api/login').post(loginUser).post(verifyUser);

// user data
router.route('/api/name').get(getName);

module.exports = router;