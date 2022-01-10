const { Router } = require('express');
const { getPostById } = require('../controllers/posts')
const {
    createPostComment,
    getPostComments,
    deletePostComment,
    updatePostComment,
    toggleLikeComment
} = require('../controllers/comments');

const commentsRouter = Router();

commentsRouter

        .use(getPostById)

        .post('/api/posts/:postId/comments', createPostComment)
        .get('/api/posts/:postId/comments', getPostComments)
        .delete('/api/posts/:postId/comments/:commentId', deletePostComment)
        .put('/api/posts/:postId/comments/:commentId', updatePostComment)
        .post('/api/posts/:postId/comments/:commentId/like', toggleLikeComment)

        // .get('/api/posts/:postId/comments/:commentId/likes', getCommentLikes);

module.exports = commentsRouter;
