const { Router } = require('express');

const usersRouter = Router();
usersRouter.get('/api/users/:userId', getUser);
usersRouter.post('/api/users/:userId/follow', toggleFollowUser);
usersRouter.get('/api/users/:userId/posts', getUserPosts);
usersRouter.get('/api/me', getMe);
usersRouter.post('/api/me', updateMe);
usersRouter.delete('/api/me', deleteMe);

module.exports = usersRouter;
