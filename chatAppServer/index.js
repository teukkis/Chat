const app = require('./app')
const http = require('http')
const conf = require('./configures/conf')
const ioConnections = require('./sockets/connections')

const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    ioConnections.connected()

    socket.on('newChatMessage', data => {
        io.emit('newChatMessage', data)
        ioConnections.newMessage(data)
    })

    socket.on('disconnect', () => {
        ioConnections.disconnected()
    })

})


server.listen(conf.PORT, () => {
    console.log(`Server running on port ${conf.PORT}`)
})

