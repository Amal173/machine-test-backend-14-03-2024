const express = require('express');
const {CreateRegister,getRegister,getSingleRegister}=require('./../controller/registerController')
const router = express.Router()
router.get('/',getRegister)
router.post('/',CreateRegister)
router.get('/:id',getSingleRegister)
module.exports = router;