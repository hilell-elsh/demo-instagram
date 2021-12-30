const usersService = require('../services/users')

const getUser = (req, res) => {
    // get user data by :userID param
    // GET method
    // /api/users/:userId
    // ** include all the user data, like:
    //      posts,
    //      additional data
    //      ....
    const user = {
        ...req.user,
        additionalData: {
            ...req.user.additionalData,
            name: {
                ...req.user.name,
                fullName: (req.user.additionalData.name.firstName + ' ' + req.user.additionalData.name.lastName)
            },
            followers: req.user.additionalData.followers
                .map(user => {
                    return {
                        userId: user,
                        userBasicData: usersService.getUser(user).select('userBasicData')
                    }
                }),
            following: req.user.additionalData.following
                .map(user => {
                    return {
                        userId: user,
                        userBasicData: usersService.getUser(user).select('userBasicData')
                    }
                }),
        },
        posts: {
            ...req.user.posts,
            myPosts: postsService.getPosts({author: req.userId}).select('_id'),
            taggedPosts: postsService.getPosts({userTags: req.userId}).select('_id')
        }
    }
    
    res
    .status(200)
    .json(user)
    .end();
}

// get user following
// get user followers

const toggleFollowUser = (req, res) => {
    // add corrent user to user's following list by :userID param
    // POST method
    // /api/users/:userId/follow
}

const getUserPosts = (req, res) => {
    // get user posts by :userID param
    // GET method
    // /api/users/:userId/posts
    // ** include all the data, like:
    //      likes,
    //      comments,
    //      usernames & images sorces
    //      ....
}


const getMe = (req, res) => {
    // get all user data
    // GET method
    // /api/me
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
    const userId = req.params.userId;
    const user = usersService.getUser(userId);
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
    getUserById
}