const { Router } = require('express');
const {
    getUser,
    getUserPosts,
    toggleFollowUser,
    getMe,
    updateMe,
    deleteMe,
    getUserById,
    getUserFollowing,
    getUserFollowers
} = require('../controllers/users');

const usersRouter = Router();
usersRouter
        .get('/api/users/:userId', getUserById, getUser)
        .put('/api/users/:userId/follow', getUserById, toggleFollowUser)
        .get('/api/users/:userId/posts', getUserById, getUserPosts)
        .get('/api/users/:userId/following', getUserById, getUserFollowing)
        .get('/api/users/:userId/followers', getUserById, getUserFollowers)
        .get('/api/me', getMe)
        .put('/api/me', updateMe)
        .delete('/api/me', deleteMe);
        //.put('/api/me/save/:postId', savePost)
// add save post

module.exports = usersRouter;

// '/users?page=1&limit=20'
