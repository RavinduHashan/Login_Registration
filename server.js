const express = require('express')//node js framework
const mongoose = require('mongoose')//use to work with mongodb,mongodb connection,mongo model, queries
const morgan = require('morgan')//It simplifies the process of logging requests to your application
const bodyParser = require('body-parser')//responsible for parsing the incoming request bodies in a middleware before you handle it.

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true, useUnifeidTopology:true})
const db = mongoose.connection 
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Data connection established..!')
})

const EmployeeRoute = require('./routes/employee')
app.use('/api/employee', EmployeeRoute)

const AuthRoute = require('./routes/auth')
app.use('/api/', AuthRoute)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

