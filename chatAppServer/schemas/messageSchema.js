const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    message: {
        type: String
    },
    date: {
        type: Date
    },
    user: {
        type: String
    }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message