const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    password:{
        type: String
    },
    city:{
        type: String
    },
    
},
{timestamps: true})
 
const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee