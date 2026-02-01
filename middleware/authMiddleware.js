const jwt = require('jsonwebtoken');
const user = require('../models/User');

const authMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
    })
} else {
        res.redirect('/login');
    }
}

module.exports = {authMiddleware};