const { Router } = require('express');
const {
    getUser,
    getUserPosts,
    toggleFollowUser,
    getMe,
    updateMe,
    deleteMe,
    getUserById
} = require('../controllers/users');

const usersRouter = Router();
usersRouter
        .get('/api/users/:userId', getUserById, getUser)
        .post('/api/users/:userId/follow', getUserById, toggleFollowUser)
        .get('/api/users/:userId/posts', getUserById, getUserPosts)
        .get('/api/me', getMe)
        .post('/api/me', updateMe)
        .delete('/api/me', deleteMe);
// add save post

module.exports = usersRouter;

// '/users?page=1&limit=20'
