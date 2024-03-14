const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    currect: {
        required: true,
        type: String
    },
    incorrect: {
        required: true,
        type: String
    },
    total: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('scores', scoreSchema)