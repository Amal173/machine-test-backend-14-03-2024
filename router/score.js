const express = require('express');
const  { getScore,CreateScore }=require('./../controller/scoreController')
const router = express.Router()
router.get('/:id',getScore)
router.post('/',CreateScore)

module.exports = router;