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
    console.log('get user', req.userId);
    
    const user = await usersService.getUser(req.userId)
    // const user = await req.user
    // .populate('additionalData.followers')
    // .populate('additionalData.following')
    // .populate('posts.myPosts')
    // .select('userBasicData additionalData')
    .lean()
    // .toObject();
    
    console.log(user);

    user.additionalData.followers = user.additionalData.followers.length;
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

// get user following
// get user followers

const toggleFollowUser = (req, res) => {
    // add corrent user to user's following list by :userID param
    // POST method
    // /api/users/:userId/follow



    if (req.currentUserId in req.user.followers) {
        usersService.updateUser(req.userId, {
            followers: req.user.followers.filter(followerId => followerId === req.currentUserId)
        })
        res
            .status(200)
            .json({isFollow: false})
            .end();
    } else {
        req.user.followers.push(req.userId);
        req.user.save();
        // usersService.updateUser(req.userId, {
        //     followers: [...req.user.followers, req.currentUserId]
        // })
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

    console.log(`request: all posts ${req.userId} 
                \nskip: ${req.skip}, limit: ${req.limit}`);
    
    const posts = await postsService.getPosts({author: req.userId})
        .skip(req.skip)
        .limit(req.limit)
        .map((post) => {
            return {
                ...post,
                author: {
                    userId: post.author,
                    userBasicData: usersService.getUser(post.author).select('userBasicData')
                },
                tags: post.tags.map(tag => tagsService.getTag(tag)),
                userTags: post.userTags
                    .map(user => {
                        return {
                            userId: user,
                            userBasicData: usersService.getUser(user).select('userBasicData')
                        }
                    }),
                likesAmount: likesService.getLikesAmount(post._id), //? new ObjectId(post._id)
                commentsAmount: commentsService.getCommentsAmount(post._id)
            }
        })
    
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
    // console.log('userId', req.params.userId);
    const userId = getId(req.params.userId);
    // console.log(userId);
    const user = await usersService.getUser(userId);
    // console.log(user.toObject());
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