const usersRouter = require('./users');
const feedRouter = require('./feed');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');
const authRouter = require('./auth');
const uploadRouter = require('./upload');
const { checkUser, validateUser } = require('../middlewares/checkuser')

const mainRouter = (router) => {
    router
        // .use(middlewares)
        .use(checkUser)

        // scope routers
        .use(usersRouter)
        .use(feedRouter)
        .use(postsRouter)
        .use(commentsRouter)
        .use(authRouter)
        .use(uploadRouter)
}

module.exports = mainRouter