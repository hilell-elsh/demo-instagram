const { Router } = require('express');
const { getLimitParams } = require('../middlewares/limitParams')
const {
    createPost,
    getPost,
    deletePost,
    updatePost,
    toggleLikePost,
    getPostById
} = require('../controllers/posts');

const postsRouter = Router();

postsRouter
        .post('/api/posts', createPost)
        .get('/api/posts/:postId', getPostById, getPost)
        .put('/api/posts/:postId', getPostById, updatePost)
        .delete('/api/posts/:postId', getPostById, deletePost)

        .post('/api/posts/uploadImage')

        .post('/api/posts/:postId/like', getPostById, toggleLikePost);


module.exports = postsRouter;
