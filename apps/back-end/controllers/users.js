const usersService = require('../services/users');
const postsService = require('../services/posts');
// const { post } = require('../routes/users');
const { getId } = require('../services/object');

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
    
    user.additionalData.followers = await usersService.getUsers({'additionalData.following': [user._id]}).count().exec();
    // console.log('user controller > getUser: followers count', user.additionalData.followers);
    
    // user.additionalData.followers = user.additionalData.followers.length;
    user.additionalData.following = user.additionalData.following.length;
    
    user.posts = {
        postsAmount: user.posts.myPosts.length,
        firstPosts: usersService.getUserPosts(user._id, limit = 15)
    }

    res
    .json(user)
    .status(200)
    .end();
}

const getUserFollowing = async (req, res) => {
    pass
}

const getUserFollowers = async (req, res) => {
    pass
}

const toggleFollowUser = (req, res) => {
    // add corrent user to user's following list by :userID param
    // POST method
    // /api/users/:userId/follow

    // console.log(`user controller > toggleFollowUser: \n${req.currentUserId} --> ${req.userId}`);
    // console.log(`user controller > toggleFollowUser: \n${req.currentUser.additionalData.following}`);
    
    // console.log(`user controller > toggleFollowUser: \n${req.currentUser.additionalData.following.includes(req.userId)}`);

    if (req.currentUser.additionalData.following.includes(req.userId)) {
        console.log('--> unfollow :(');
        // usersService.updateUser(req.currentUserId, {
        //     followeing: req.currentUser.additionalData.following.filter(followerId => followerId === req.userId)
        // })
        
        req.currentUser.additionalData.following = req.currentUser.additionalData.following.filter(followerId => followerId === req.userId)
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
    // get user posts by :userID param
    // GET method
    // /api/users/:userId/posts?skip=0&limit=20
    // ** include all the data, like:
    //      likes,
    //      comments,
    //      usernames & images sorces
    //      ....
    // -----------------------------------------------
    // *** must get 'skip' and 'limit' as limitParams

    console.log(`user controller > getUserPosts: request: all posts ${req.userId} 
                \nskip: ${req.skip}, limit: ${req.limit}`);
    
    const posts = await usersService.getUserPosts(req.userId, req.skip, req.limit)
    // console.log(`user controller > getUserPosts > posts:`, posts);

    res
        .status(200)
        .json(posts)
        .end();
}

const getMe = (req, res) => {
    // get all user data
    // GET method
    // /api/me
    const me = {
        ...req.currentUser,
    }
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