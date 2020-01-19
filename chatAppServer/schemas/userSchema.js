const mongoose = require('mongoose')
const uniquevalidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    location: {
        type: String
    },
    icon: {
         data: Buffer, 
         contentType: String 
    }

})

userSchema.plugin(uniquevalidator)
const User = mongoose.model('User', userSchema)

module.exports = User
