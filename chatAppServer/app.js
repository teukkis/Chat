const conf = require('./configures/conf')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const messagesRouter = require('./routers/messageRouter')
const loginRouter = require('./routers/loginRouter')
const usersRouter = require('./routers/userRouter')

mongoose.connect(conf.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => {
        console.log('connected to mongo')
    }).catch (error => {
        console.log('error while connecting to mongo')
    })

app.use(express.static('build'))
app.use(cors())

app.use(bodyParser.json())

app.use('/api/messages', messagesRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)


module.exports = app


