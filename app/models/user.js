// app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var bcrypt = require("bcrypt-node.js");

//define the SCHEMA for the USER MODEL
var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

// METHODS
//generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSalySync(8), null);
};

//checking if the PASSWORD is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

//CREATE the model for users and expose it to our App
module.exports = mongoose.model('User', userSchema);
