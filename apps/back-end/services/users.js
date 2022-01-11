const UserModel = require('../models/user');
const postsService = require('../services/posts');
const commentsService = require('../services/comments');
const likesService = require('../services/likes');

function createUser (data) {
    const newUser = new UserModel(data);
    return newUser.save();
}

function getUser(userId) {
    return UserModel.findById(userId);    
}

async function getUserPosts(userId, skip=0, limit=10) {
    const MAX_POSTS = 50;
    limit = Math.min(limit, MAX_POSTS);
    console.log(`user services > getUserPosts: request: posts of ${userId} 
    \nskip: ${skip}, limit: ${limit}`);

    const posts = await postsService.getPosts({author: userId})
        .skip(skip)
        .limit(limit)
        .populate('author', 'userBasicData')
        .populate('tags')
        .populate('userTags', 'userBasicData')
        .lean();
    
    return posts.map(post => {
        post.likesAmount = likesService.getLikesAmount(post._id), //? new ObjectId(post._id)
        post.commentsAmount = commentsService.getCommentsAmount(post._id)

    })

}

function getUsers(query={}) {
    return UserModel.find(query)
}

function deleteUser(query={}) {
    return UserModel.findOneAndDelete({ query })    
}

function updateUser(userId, data) {
    return UserModel.findByIdAndUpdate(userId, data)
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    getUserPosts
};