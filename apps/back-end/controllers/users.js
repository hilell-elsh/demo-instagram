

const getUser = (req, res) => {
    // get user data by :userID param
    // GET method
    // /api/users/:userId
    // ** include all the user data, like:
    //      posts,
    //      additional data
    //      ....
    
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


module.exports = {
    getUser,
    getUserPosts,
    toggleFollowUser,
    getMe,
    updateMe,
    deleteMe
}