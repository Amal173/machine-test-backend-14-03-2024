const express = require('express');
const { connectDb } = require('./config/dbConnection')
const cors=require('cors')
require('dotenv').config();
connectDb()
const app = express();
const port = process.env.PORT
app.use(cors())
app.use(express.json());
app.use('/register', require('./router/register'))
app.use('/question', require('./router/question'))
app.use('/score', require('./router/score'))
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})