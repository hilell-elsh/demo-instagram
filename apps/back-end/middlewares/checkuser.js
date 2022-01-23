const jwt = require('jsonwebtoken')

const { getUser } = require('../services/users')
const { getId } = require('../services/object')
const { getToken, createToken, updateToken } = require('../services/auth')

const TEN_MINUTES = 1000 * 60 * 10
const ONE_MONTH = 30 * 24 * 60 * 60

async function checkUser(req, res, next) {
    const userId = req.headers['user-id']

    // console.log("checkuser > checkuser > userId:", userId);

    if (userId === '0') {
        console.log('checkuser > : admin request')
        req.currentUser = 'admin'
        next()
    } else {
        console.log('checkuser > : another user request')
        // const user = await getUser(userId);

        try {
            const currentUserId = getId(userId)
            console.log(`checkuser > currentUserId : ${currentUserId}`)
            const currentUser = await getUser(currentUserId)
            // console.log(`checkuser: currentUser ${currentUser}`);
            req.currentUser = currentUser
            req.currentUserId = req.currentUser._id
        } catch (err) {
            // err
        }

        next()
    }
}

async function validateUser(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        res.status(401).end()
    }

    let payload, createDate

    try {
        payload = jwt.verify(token, process.env.JWT_SECRET)
        if (!payload) {
            throw new Error('Invalid token')
        }
        createDate = new Date(payload.created)
    } catch (err) {
        res.status(401).end()
    }

    if (Date.now() - createDate < TEN_MINUTES) {
        req.userId = payload.userId
        next()
    }

    const dbToken = await getToken(req.userId)
    if (!dbToken) {
        res.status(401).end()
    }

    const newToken = createToken(req.userId)
    updateToken({ userId, token: newToken })
    res.cookie('token', newToken, {
        exp: Date.now() + ONE_MONTH,
        httpOnly: true,
    })
}

module.exports = {
    checkUser,
    validateUser,
}
