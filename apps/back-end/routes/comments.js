const { Router } = require('express');
const {
    createPostComment,
    getPostComments,
    deletePostComment,
    updatePostComment,
    toggleLikeComment
} = require('../controllers/comments');

const commentsRouter = Router();

commentsRouter.post('/api/posts/:postId/comments', createPostComment);
commentsRouter.get('/api/posts/:postId/comments', getPostComments);
commentsRouter.delete('/api/posts/:postId/comments/:commentId', deletePostComment);
commentsRouter.put('/api/posts/:postId/comments/:commentId', updatePostComment);
commentsRouter.post('/api/posts/:postId/comments/:commentId/like', toggleLikeComment);


module.exports = commentsRouter;
