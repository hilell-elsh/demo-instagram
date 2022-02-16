const { Router } = require('express')
const { getLimitParams } = require('../middlewares/limitParams')
const {
    createPost,
    getPost,
    deletePost,
    updatePost,
    toggleLikePost,
    getPostById,
    getPostLikes,
} = require('../controllers/posts')

const postsRouter = Router()

postsRouter
    .post('/api/posts', createPost)
    // .get('/api/posts', getMyPosts)
    .get('/api/posts/:postId', getPostById, getPost)
    .put('/api/posts/:postId', getPostById, updatePost)
    .delete('/api/posts/:postId', getPostById, deletePost)

    .post('/api/posts/uploadImage')

    .put('/api/posts/:postId/like', /*getPostById ,*/ toggleLikePost)

    .get('/api/posts/:postId/likes', getPostById, getPostLikes)

// .put('/api/posts/:postId'/save, savePost)

module.exports = postsRouter
