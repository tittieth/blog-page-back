const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
},

{timestamps: true}

);

module.exports = mongoose.model('user', UserSchema)