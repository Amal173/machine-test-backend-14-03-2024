const score = require('./../models/score')
const asyncHandler = require('express-async-handler')


const getScore = asyncHandler(async (req, res) => {
    try {
        const result = await score.findById(req.params.id)
        return res.status(201).json({ score: result })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
})
const CreateScore = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        const result = await score.create()
        return res.status(201).json({ score: result })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
})


module.exports = { getScore,CreateScore }