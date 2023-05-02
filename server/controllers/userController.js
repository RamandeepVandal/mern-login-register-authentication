const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// POST request -> Register an account
const registerUser = async (req, res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' });
    } catch (error) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
}

// POST request -> Login into account
const loginUser = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    // user does not exist
    if (!user) {
        return res.json({ status: 'error', error: 'Invalid User' })
    }

    // decrypt password -> compare
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordValid) {
        // create jwt
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET)
        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
}

// GET request -> verify user
const verifyUser = async (req, res) => {
    const token = req.header['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        const user = await User.findOne({ email: email });
        return res.json({ status: 'ok', name: user.name })
    } catch (error) {
        console.log(error);
        return res.json({ status: 'error', error: 'Invalid token.' })
    }
}

// GET request -> get user name
const getName = async (req, res) => {

    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        const user = await User.findOne({ email: email })
        return res.json({ status: 'ok', name: user.name });
    } catch (err) {
        console.log(err);
        return res.json({ status: 'error', error: 'invalid token' })
    }
}

module.exports = { registerUser, loginUser, verifyUser, getName };