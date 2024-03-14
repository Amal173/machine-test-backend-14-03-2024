const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    no: {
        required: true,
        type: Number
    },
    question: {
        required: true,
        type: String
    },
    options: {
        required: true,
        type: []
    },
    rightAnswer: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('questions', questionSchema)