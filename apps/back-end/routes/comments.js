const { Router } = require('express')
const { getPostById } = require('../controllers/posts')
const {
    createPostComment,
    getPostComments,
    deletePostComment,
    updatePostComment,
    toggleLikeComment,
    getCommentById
} = require('../controllers/comments')

const commentsRouter = Router()

commentsRouter

    .use(getPostById)

    .post('/api/posts/:postId/comments', createPostComment)
    .get('/api/posts/:postId/comments', getPostComments)
    .delete('/api/posts/:postId/comments/:commentId', getCommentById, deletePostComment)
    .put('/api/posts/:postId/comments/:commentId', getCommentById, updatePostComment)
    .post('/api/posts/:postId/comments/:commentId/like', getCommentById, toggleLikeComment)

// .get('/api/posts/:postId/comments/:commentId/likes', getCommentLikes);

module.exports = commentsRouter
