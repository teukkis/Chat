const Message = require('../schemas/messageSchema')

const connected = () => {
    console.log('user connected')
}

const disconnected = () => {
    console.log('user disconnected')
}

const newMessage = async (data) => {
    console.log(data)
    try {

        const newMessageObject = new Message({
            message: data.message,
            date: new Date(),
            user: data.user
        })

        await newMessageObject.save()

    } catch (error) {

    }

}


module.exports = {
    connected,
    disconnected,
    newMessage
}