const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
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
    }
    
},
{timestamps: true})
 
const User = mongoose.model('User', userSchema)

module.exports = User