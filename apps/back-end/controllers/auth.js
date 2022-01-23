const usersService = require('../services/users')
const authService = require('../services/auth')
const { createToken, updateToken } = require('../services/auth')

const ONE_MONTH = 30 * 24 * 60 * 60

const signup = async (req, res) => {
    const user = req.body
    const firstName = user.fullname.split(' ')[0]
    const lastName = user.fullname.split(' ')[1]

    const newUser = await usersService.createUser({
        userBasicData: {
            username: user.username,
        },
        additionalData: {
            email: user.email,
            name: {
                firstName: firstName,
                lastName: lastName,
            },
        },
    })

    authService.createAuth({ userId: newUser._id, password: user.password })

    newUser.additionalData.following = 0
    newUser.additionalData.followers = 0
    newUser.posts.postsAmount = 0
    newUser.posts.firstPosts = []
    res.json(newUser.toObject()).status(200).end()
}

const login = async (req, res) => {
    const loginData = req.body
    const userId = await usersService
        .getUsers({ 'userBasicData.username': loginData.username })
        .select('_id')
        .lean()
    if (
        authService.validateAuth({
            userId: userId[0]._id,
            password: loginData.password,
        })
    ) {
        const newToken = createToken(req.userId)
        updateToken({ userId, token: newToken })
        res.cookie('token', newToken, {
            exp: Date.now() + ONE_MONTH,
            httpOnly: true,
        })
        res.json('token').status(200).end()
    } else {
        res.json('error').status(401).end()
    }
}

const logout = (req, res) => {
    // logout
    // POST method
    // /api/logout
}

module.exports = {
    login,
    logout,
    signup,
}
