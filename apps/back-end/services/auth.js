const jwt = require('jsonwebtoken')
const AuthModel = require('../models/auth')

function createAuth({ userId, password }) {
    const newAuth = new AuthModel({ userId, password })
    newAuth.save()
}

async function validateAuth({ userId, password }) {
    const user = await AuthModel.findOne({ userId: userId })
    return password === user.password
}

async function updateAuth({ userId, newPassword }) {
    await AuthModel.findOneAndUpdate({ userId: userId }, {password: newPassword})
}

function deleteAuth(userId) {
    AuthModel.findOneAndDelete({ userId: userId })
}

function createToken(userId) {
    const newPayload = {
        userId: userId,
        created: new Date().toJSON(),
    }
    const token = jwt.sign(newPayload, process.env.JWT_SECRET)
    return token
}

async function updateToken({ userId, token: newToken }) {
    await AuthModel.findOneAndUpdate({ userId: userId }, {token: newToken})
}

async function getToken(userId) {
    const userAuth = await AuthModel.findOne({ userId: userId })
    return userAuth.token
}

module.exports = {
    createAuth,
    validateAuth,
    updateAuth,
    deleteAuth,
    createToken,
    updateToken,
    getToken
}
