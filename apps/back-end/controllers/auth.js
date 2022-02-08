const usersService = require('../services/users')
const authService = require('../services/auth')
const { createToken, updateToken } = require('../services/auth')

const ONE_MONTH = 30 * 24 * 60 * 60

const signup = async (req, res) => {
    console.log('signup request', req.body)
    const user = req.body
    const firstName = user.fullname.split(' ')[0]
    const lastName = user.fullname.split(' ')[1]

    try {
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
    } catch (err) {
        console.log('error creating user', err);
        res.json({ error: err }).status(409).end();        
    }

    authService.createAuth({ userId: newUser._id, password: user.password })

    newUser.additionalData.following = 0
    newUser.additionalData.followers = 0
    newUser.posts.postsAmount = 0
    newUser.posts.firstPosts = []
    res.json(newUser.toObject()).status(200).end()
}

const login = async (req, res) => {
    console.log('login request');
    const loginData = req.body
    const user = await usersService
        .getUsers({ 'userBasicData.username': loginData.username })
        .select('_id')
        .lean()
    const userId = user[0]._id
    if (
        authService.validateAuth({
            userId: userId,
            password: loginData.password,
        })
    ) {
        const newToken = createToken(userId)
        updateToken({ userId, token: newToken })
        res.cookie('token', newToken, {
            exp: Date.now() + ONE_MONTH,
            httpOnly: true,
        })
        res.json(true).status(200).end()
    } else {
        res.json(false).status(401).end()
    }
}

const logout = (req, res) => {
    // logout
    // POST method
    // /api/logout
    const newToken = ""
    updateToken({ userId: req.curUserId, token: newToken })
    res.cookie('token', newToken, {
        httpOnly: true,
    })
    res.json('logout').status(200).end()
}

module.exports = {
    login,
    logout,
    signup
}
