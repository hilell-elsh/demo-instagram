const jwt = require('jsonwebtoken')

const { getUser } = require('../services/users')
const { getId } = require('../services/object')
const { getToken, createToken, updateToken } = require('../services/auth')

const TEN_MINUTES = 1000 * 60 * 10
const ONE_DAY = TEN_MINUTES * 6 * 24
const ONE_MONTH = ONE_DAY * 30



async function validateUser(req, res, next) {
    const token = req.cookies.token
    
    if (!token) {
        return res.status(401).end()
    }

    let payload, createDate

    try {
        payload = jwt.verify(token, process.env.JWT_SECRET)
        if (!payload) {
            throw new Error('Invalid token')
        }
        createDate = new Date(payload.created)
    } catch (err) {
        return res.status(401).end()
    }
    req.curUserId = payload.userId
    req.curUser = await getUser(req.curUserId)

    if (Date.now() - createDate < TEN_MINUTES) {
       
        return next()
    }
    
    const dbToken = await getToken(req.curUserId)
    let dbPayload = jwt.verify(dbToken, process.env.JWT_SECRET)
    let dbCreateDate = new Date(dbPayload.created)
    if (Date.now() - dbCreateDate > ONE_DAY) {
        return res.status(401).end()
    }

    const newToken = createToken(req.curUserId)
    updateToken({ userId: req.curUserId, token: newToken })
    res.cookie('token', newToken, {
        exp: Date.now() + ONE_MONTH,
        httpOnly: true,
    })
    next()
}

module.exports = {
    validateUser,
}
