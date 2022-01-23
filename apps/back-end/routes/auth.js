const { Router } = require('express')
const { login, logout, signup } = require('../controllers/auth')

const authRouter = Router()
authRouter.post('/api/login', login)
authRouter.post('/api/logout', logout)
authRouter.post('/api/signup', signup)

module.exports = authRouter
