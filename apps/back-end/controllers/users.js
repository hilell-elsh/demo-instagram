const usersService = require('../services/users');
const postsService = require('../services/posts');
// const { post } = require('../routes/users');
const { getId } = require('../services/object');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getUser = async (req, res) => {
    // get user data by :userID param
    // GET method
    // /api/users/:userId
    // ** include all the user data, like:
    //      posts,
    //      additional data
    //      ....
    console.log('user controller > getUser: get user', req.userId);
    
    const user = await usersService.getUser(req.userId).lean()
    // .toObject();
    
    console.log('user controller > getUser:', user);
    
    user.additionalData.following = user.additionalData.following.length;
    user.additionalData.followers = await usersService.getUsers({'additionalData.following': user._id}).count().exec();
    // console.log('user controller > getUser: followers count', user.additionalData.followers);    
    
    user.posts = {
        postsAmount: await postsService.getPosts({author: user._id}).count().exec(),
        firstPosts: await usersService.getUserPosts({userId: user._id, limit: 15})
    }

    res
    .json(user)
    .status(200)
    .end();
}

const toggleFollowUser = (req, res) => {
    // add corrent user to user's following list by :userID param
    // POST method
    // /api/users/:userId/follow

    // console.log(`user controller > toggleFollowUser: \n${req.currentUserId} --> ${req.userId}`);
    // console.log(`user controller > toggleFollowUser: \n${req.currentUser.additionalData.following}`);
    
    // console.log(`user controller > toggleFollowUser: \n${req.currentUser.additionalData.following.includes(req.userId)}`);

    if (req.currentUser.additionalData.following.includes(req.userId)) {
        // usersService.updateUser(req.currentUserId, {
        //     followeing: req.currentUser.additionalData.following.filter(followerId => followerId === req.userId)
        // })
        // console.log('oldFollowing', req.currentUser.additionalData.following);
        console.log('--> unfollow :( ' + ObjectId(req.userId));
        // const newFollowing = req.currentUser.additionalData.following.filter((followerId) => followerId.equals(req.userId))
        const newFollowing = req.currentUser.additionalData.following
        // console.log('unfollow index:', newFollowing.indexOf(req.userId));
        newFollowing.splice(newFollowing.indexOf(req.userId),1)
        // console.log('newFollowing', newFollowing);
        req.currentUser.additionalData.following = newFollowing
        req.currentUser.save();

        res
        .status(200)
        .json({isFollow: false})
        .end();
    } else {
        console.log('--> follow');
        req.currentUser.additionalData.following.push(req.userId);
        req.currentUser.save();
        
        res
            .status(200)
            .json({isFollow: true})
            .end();
    }
}

const getUserPosts = async (req, res) => {
    /* get user posts by :userID param
    GET method
    /api/users/:userId/posts?skip=0&limit=20
    ** include all the data, like:
         likes,
         comments,
         usernames & images sorces
         ....
    -----------------------------------------------
    *** must get 'skip' and 'limit' as limitParams
    */

    console.log(`user controller > getUserPosts: request: all posts ${req.userId} 
                \tskip: ${req.skip}, limit: ${req.limit}`);
    
    const posts = await usersService.getUserPosts({userId: req.userId, skip: req.skip, limit: req.limit})
    // console.log(`user controller > getUserPosts > posts:`, posts);

    res
        .status(200)
        .json(posts)
        .end();
}

const getUserFollowing = async (req, res) => {
    const following = await usersService.getUserFollowing(req.user.additionalData.following, req.skip, req.limit);
    res
        .status(200)
        .json(following)
        .end();
}

const getUserFollowers = async (req, res) => {
    const followers = await usersService.getUserFollowers(req.userId, req.skip, req.limit);
    res
        .status(200)
        .json(followers)
        .end();
}

const getMe = async (req, res) => {
    // get all user data
    // GET method
    // /api/me
    const me = req.currentUser.toObject();
    me.additionalData.following = me.additionalData.following.length;
    me.additionalData.followers = await usersService.getUsers({'additionalData.following': req.currentUserId}).count().exec();
    me.posts.postsAmount = await postsService.getPosts({author: req.currentUserId}).count().exec();
    me.posts.firstPosts = await usersService.getUserPosts({userId: req.currentUserId, limit: 15});
    
    res
    .json(me)
    .status(200)
    .end();

    // username
    // 
}

const updateMe = (req, res) => {
    // update user data
    // POST method
    // /api/me
}

const deleteMe = (req, res) => {
    // delete user include all his data
    // DELETE method
    // /api/me
}

// inside help middleware
const getUserById = async (req, res, next) => {
    // console.log('user controller > getUserById: userId', req.params.userId);
    const userId = getId(req.params.userId);
    // console.log('user controller > getUserById:', userId);
    const user = await usersService.getUser(userId);
    // console.log('user controller > getUserById:', user.toObject());
    req.userId = userId;
    if (user) {
        req.user = user;
        req.userId = req.user._id;
        next();
    } else {
        res.status(404).json({message: 'User not found'}).end();
    }
}

module.exports = {
    getUser,
    getUserPosts,
    toggleFollowUser,
    getMe,
    updateMe,
    deleteMe,
    getUserById,
    getUserFollowing,
    getUserFollowers
}