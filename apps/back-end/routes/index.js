const usersRouter = require('./users');
const feedRouter = require('./feed');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');
const authRouter = require('./auth');
const uploadRouter = require('./upload');

const mainRouter = (router) => {
    router
        // .use(middlewares)

        // scope routers
        .use(usersRouter)
        .use(feedRouter)
        .use(postsRouter)
        .use(commentsRouter)
        .use(authRouter)
        .use(uploadRouter)
}

module.exports = mainRouter