const { Router } = require('express');
const {
    getUser,
    getUserPosts,
    toggleFollowUser,
    getMe,
    updateMe,
    deleteMe
} = require('../controllers/users');

const usersRouter = Router();
usersRouter.get('/api/users/:userId', getUser)
        .post('/api/users/:userId/follow', toggleFollowUser)
        .get('/api/users/:userId/posts', getUserPosts)
        .get('/api/me', getMe)
        .post('/api/me', updateMe)
        .delete('/api/me', deleteMe);
// add save post

module.exports = usersRouter;

// '/users?page=1&limit=20'
