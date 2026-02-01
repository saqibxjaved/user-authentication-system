const express = require('express');
const User = require('../models/User');

const signup_get = (req, res) => {
    res.render('signup');
};

const signup_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        const result = await user.save();
        res.status(201).send('user created successfully');
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).send('Error: That email is already registered.');
        }
        else {
            res.status(400).send('error creating user: ' + err);
        }
    }
};

const login_get = (req, res) => {
    res.render('login');
};

const login_post = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send('user logged in');
};

//or we can use this method too

// router.get('/signup', (req,res)=> {
//     res.render('signup');
// });

// router.post('/signup', (req,res)=> {
//     res.send('new user created');
// });

// router.get('/login', (req,res)=> {
//     res.render('login');
// });

// router.post('/login', (req,res)=> {
//     res.send('login successfully');
// });

//now we are going to export these functions

module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post
};