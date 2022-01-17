const postsService = require('../services/posts');
const commentsService = require('../services/comments');
const likesService = require('../services/likes');


const getFeed = async (req, res) => {
    
    // get feed of current user
    // GET method
    // /api/feed
    
    const MAX_POSTS = 30;
    limit = Math.min(req.limit, MAX_POSTS);
    skip = req.skip;
    console.log(`feed services > getFeed: ${req.currentUserId} 
    \t...skip: ${skip}, limit: ${limit}`);

    const posts = await postsService.getPosts({author: {$in: req.currentUser.additionalData.following}})
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
    
    res
        .status(200)
        .json(posts)
        .end();
    
    // postsService.
    // req.user.additionalData.following
}

module.exports = {getFeed}