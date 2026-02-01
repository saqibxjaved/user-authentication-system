const mongoose = require ('mongoose');
const {isEmail} = require('validator'); // 👈 Import the validator
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'please enter email'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, 'please enter a valid email'] // 👈 Validate the email
    },
    password: {
        type: String,
        require: [true,'please enter password'],
        minlength: [ 6, 'min length is 6']
    }
});

userSchema.pre('save', async function(next) { // async (next) => { will not work because 'this' keyword is not 
    // 1. Generate a "salt" (random data)     // present in arrow functions
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('user', userSchema);
module.exports = User;