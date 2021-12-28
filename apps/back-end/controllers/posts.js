const postsService = require('../services/posts');
const usersService = require('../services/users');
const tagsService = require('../services/tags');
const likesService = require('../services/likes');
const commentsService = require('../services/comments');

const createPost = async (req, res) => {
    // create new post
    // POST method
    // /api/posts
    const newPost = {
        ...res.body,
        author: req.user
        // add tags and usre tags?
    }
    
    res
        .status(200)
        .json(postsService.createPost(newPost))
        .end();
} 

const getPost = (req, res) => {
    // get post data by :postID param
    // GET method
    // /api/posts/:postId
    // ** include all the post data, like:
    //      comments,
    //      likes,
    //      usernames & images sorces
    //      ....
    const post = {
        ...req.post,
        author: usersService.getUser(req.post.author).select('userBasicData'), 
        tags: req.post.tags.map(tag => tagsService.getTag(tag)),
        userTags: req.post.userTags
            .map(user => {
                return {
                    userId: user,
                    userBasicData: usersService.getUser(user).select('userBasicData')}
            }),
        postLikes: likesService.getLikesAmount(req.post._id), //? new ObjectId(req.post._id)
        comments: commentsService.getCommentsAmount(req.post._id)
    }

} 

const deletePost = (req, res) => {
    // delete post by :postId param
    // DELETE method
    // /api/posts/:postId
} 

const updatePost = (req, res) => {
    // update post data by :postId param
    // PUT method
    // /api/posts/:postId
} 

const toggleLikePost = (req, res) => {
    // add corrent user to post's likes list
    // POST method
    // /api/posts/:postId/like
} 

// inside help middleware
const getPostById = async (req, res, next) => {
    const postId = req.params.postId;
    const post = postsService.getPost(postId);
    req.postId = post.postId;
    if (post) {
        req.post = post;
        next();
    } else {
        res.status(404).json({message: 'Post not found'}).end();
    }
}


module.exports = {
    createPost,
    getPost,
    deletePost,
    updatePost,
    toggleLikePost,
    getPostById
}