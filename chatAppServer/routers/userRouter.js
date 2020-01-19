const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../schemas/userSchema')


usersRouter.get('/', async (request, response, next) => {
    const body = request.body

    try {
        const user = await User.find({})
        response.json(user.map( u => u.toJSON()))

    } catch (error) {
        console.log(error)
        next()
    }

})

usersRouter.get('/:username', async (request, response, next) => {
    const params = request.params
    console.log(params)
    try {
        await User.findOne({username: params.username}, (error, obj) => {
            response.status(200).send(obj)
        })
        

    } catch (error) {
        console.log(error)
        next()
    }

})

usersRouter.put('/:username', async (request, response, next) => {
    const body = request.body
    console.log(body)
    try {
        
        const user = await User.findOneAndUpdate(
            {username: body.username}, 
            {
                status: body.status,
                location: body.location,
                icon: body.icon
            }, 
            {new: true},
            (error, doc) => {
                response.status(200).send(doc)        
            })

    } catch (error) {
        next()
    }
})

usersRouter.post('/', async (request, response, next) => {
    
    const body = request.body
    const saltRounds = 10

    if (body.password.length < 3) {
        response.status(400).json({ error: 'too short password' })
    } else {

        try {
            const passwordHash = await bcrypt.hash(body.password, saltRounds)
            const user = new User({
                username: body.username,
                password: passwordHash,
                
            })
        
            const savedUser = await user.save()

            response.json(savedUser)
        
        } catch (error) {
            next(error)
        }
    }
})

module.exports = usersRouter

