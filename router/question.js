const express = require('express');
const {getQuestion}=require('./../controller/questionsController')
const router = express.Router()
router.get('/',getQuestion)

module.exports = router;