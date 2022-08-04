const express=require('express')
//const { process } = require('process')
const app=express()//call express
app.use(express.json())
//route import
const product=require('./routes/productRoute')

//Using routes
app.use('/api/v1',product)

module.exports=app//export app
