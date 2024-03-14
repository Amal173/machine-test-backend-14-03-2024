const register = require('./../models/register')
const asyncHandler = require('express-async-handler')

const CreateRegister = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        const result = await register.create(req.body)
        return res.status(201).json({ register: result })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
})
const getRegister = asyncHandler(async (req, res) => {
    try {
        const result = await register.find()
        return res.status(201).json({ register: result })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
})
const getSingleRegister = asyncHandler(async (req, res) => {
    try {
        const result = await register.findById(req.params.id)
        return res.status(201).json({ register: result })
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
})

module.exports = { CreateRegister, getRegister, getSingleRegister }