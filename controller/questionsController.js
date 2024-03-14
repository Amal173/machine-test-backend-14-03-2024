const question = require('./../models/questions')
const asyncHandler = require('express-async-handler')


const getQuestion = asyncHandler(async (req, res) => {
    try {
        const result = await question.find()
        return res.status(201).json({ question: result })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
})


module.exports = { getQuestion }