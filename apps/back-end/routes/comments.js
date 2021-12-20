const { Router } = require('express');

const commentsRouter = Router();

commentsRouter.get('/api/posts/:postId/comments', getPostComment);
commentsRouter.delete('/api/posts/:postId/comments/:commentId', deletePostComment);
commentsRouter.post('/api/posts/:postId/comments', createPostComment);
commentsRouter.put('/api/posts/:postId/comments/:commentId', updatePostComment);
commentsRouter.post('/api/posts/:postId/comments/:commentId/like', toggleLikeComment);


module.exports = commentsRouter;
