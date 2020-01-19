const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const loginRouter = require('express').Router()
const User = require('../schemas/userSchema')


loginRouter.post('/', async (req, res, next) => {
    const body = req.body

    try {
        const user = await User.findOne( {username: body.username})
        console.log(user)
        const passwordCorrect = user === null
            ? false
            :await bcryptjs.compare(body.password, user.password)

        if (!(user && passwordCorrect)) {
            return res.status(401).json({
                error:'invalid credientials'
            })
        }

        const userForToken = {
            username: user.username,
            id: user._id
        }

        const token = jwt.sign(userForToken, 'salaus')

        res.status(200).send({token, username: user.username})

    } catch (error) {
        console.log(error)
    }

    
})

module.exports = loginRouter
