const { Router } = require('express');
const {
    createPost,
    getPost,
    deletePost,
    updatePost,
    toggleLikePost
} = require('../controllers/posts');

const postsRouter = Router();
postsRouter.post('/api/posts', createPost);
postsRouter.get('/api/posts/:postId', getPost);
postsRouter.delete('/api/posts/:postId', deletePost);
postsRouter.put('/api/posts/:postId', updatePost);
postsRouter.post('/api/posts/:postId/like', toggleLikePost);


module.exports = postsRouter;
