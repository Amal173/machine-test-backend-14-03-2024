const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('register', registerSchema)