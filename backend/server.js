const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

//initialize express
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

//listen
app.listen(port, ()=>{
    console.log("Server is running ")
})