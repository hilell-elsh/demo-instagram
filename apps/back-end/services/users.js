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

function getUsers(query={}) {
    return UserModel.find(query)
}

async function getUserPosts(userId, skip=0, limit=10) {
    const MAX_POSTS = 20;
    limit = Math.min(limit, MAX_POSTS);
    console.log(`user services > getUserPosts: request: posts of ${userId} 
    \t...skip: ${skip}, limit: ${limit}`);

    const posts = await postsService.getPosts({author: userId})
        .skip(skip)
        .limit(limit)
        .populate('author', 'userBasicData')
        .populate('tags')
        .populate('userTags', 'userBasicData')
        .lean()
        .then( (posts) => {
                return Promise.all(
                    posts.map( async (post) => {
                        post.likesAmount = await likesService.getLikesAmount(post._id),
                        post.commentsAmount = await commentsService.getCommentsAmount(post._id)
                        return post
                    })
                )
            }
        )

    // console.log(`user services > getUserPosts > posts:`, posts);
    
    return posts
}

async function getUserFollowers(userId, skip=0, limit=10) {
    const followers = await getUsers({'additionalData.following': userId})
        .select('userBasicData')
        .skip(skip)
        .limit(limit)
        .lean()
    // get user {additionalData.following {$in {cur..userId} } }.skip.limit.select('userBasicData')...
    return followers
}

async function getUserFollowing(following, skip=0, limit=10) {
    console.log(`user services > getUserFollowing > following: ${following}`);
    return await getUsers({_id: following})
    .select('userBasicData')
    .skip(skip)
    .limit(limit)
    .lean()
    // get user {_id {$in {cur..user.additionalData.following} } }.skip.limit.select('userBasicData')...
}

function deleteUser(query={}) {
    return UserModel.findOneAndDelete(query)    
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
    getUserPosts,
    getUserFollowers,
    getUserFollowing
};