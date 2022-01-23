const usersRouter = require('./users')
const feedRouter = require('./feed')
const postsRouter = require('./posts')
const commentsRouter = require('./comments')
const authRouter = require('./auth')
const uploadRouter = require('./upload')
const adminRouter = require('./admin')
const { validateUser } = require('../middlewares/checkuser')

const mainRouter = (router) => {
    router
        // scope routers
        .use(authRouter)

        .use(validateUser)

        .use(usersRouter)
        .use(feedRouter)
        .use(postsRouter)
        .use(commentsRouter)
        .use(uploadRouter)
        .use(adminRouter)
}

module.exports = mainRouter
