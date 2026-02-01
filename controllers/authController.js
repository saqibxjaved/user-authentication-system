const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Handle Errors
const handleErrors = (err) => {
    // 👇 PRINT THE REAL ERROR TO YOUR TERMINAL SO WE CAN SEE IT
    console.log(err.message, err.code); 

    let errors = { email: '', password: '' };

    // 1. Duplicate Email (Check for code 11000)
    if (err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }

    // 2. Validation Errors
    // 👇 FIXED: Added .toLowerCase() to match "User" or "user"
    if (err.message.toLowerCase().includes('validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

// Create Token Function
const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds
const createToken = (id) => {
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn: maxAge
    });
}

// ------------------- CONTROLLERS -------------------

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        // Now this will catch 'incorrect email' or 'incorrect password'
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = async (req, res) => {
res.cookie('jwt', '', { maxAge: 1 }); // Overwrite the cookie to log out
res.redirect('/'); // Redirect to home page after logout
}