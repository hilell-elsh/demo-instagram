const jwt = require('jsonwebtoken')

const { getUser } = require('../services/users')
const { getId } = require('../services/object')
const { getToken, createToken, updateToken } = require('../services/auth')

const TEN_MINUTES = 1000 * 60 * 10
const ONE_DAY = TEN_MINUTES * 6 * 24
const ONE_MONTH = ONE_DAY * 30

async function checkUser(req, res, next) {
    const userId = req.headers['user-id']

    // console.log("checkuser > checkuser > userId:", userId);

    if (userId === '0') {
        console.log('checkuser > : admin request')
        req.curUser = 'admin'
        next()
    } else {
        console.log('checkuser > : another user request')
        // const user = await getUser(userId);

        try {
            const curUserId = getId(userId)
            console.log(`checkuser > curUserId : ${curUserId}`)
            const curUser = await getUser(curUserId)
            // console.log(`checkuser: curUser ${curUser}`);
            req.curUser = curUser
            req.curUserId = req.curUser._id
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
        req.curUserId = payload.userId
        req.curUser = await getUser(req.curUserId)
        next()
    }

    const dbToken = await getToken(req.userId)
    let dbPayload = jwt.verify(dbToken, process.env.JWT_SECRET)
    let dbCreateDate = dbPayload.created
    if (Date.now() - dbCreateDate > ONE_DAY) {
        res.status(401).end()
    }

    const newToken = createToken(req.userId)
    updateToken({ userId, token: newToken })
    res.cookie('token', newToken, {
        exp: Date.now() + ONE_MONTH,
        httpOnly: true,
    })
    next()
}

module.exports = {
    checkUser,
    validateUser,
}
