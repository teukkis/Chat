const messagesRouter = require('express').Router()
const Messages = require('../schemas/messageSchema')

messagesRouter.get('/', async (req, res, next) => {
    try {
        const messages = await Messages.find({})
        res.json(messages.map( m => m.toJSON()))

    } catch (error) {
        next(error)
    }
})

module.exports = messagesRouter