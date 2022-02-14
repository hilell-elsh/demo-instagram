const commentsService = require('../services/comments')
const likesService = require('../services/likes')

const createPostComment = async (req, res) => {
    // create new post comment, by :postId param
    // POST method
    // /api/posts/:postId/comments

    // postId user text

    try {
        const newComment = await commentsService.addComment({
            ...req.body,
            user: req.curUserId,
        })

        res.status(200).json(newComment).end()
    } catch (err) {
        res.status(500).json(err).end()
    }
}

const getPostComments = (req, res) => {
    // get all post comments data by :postID param
    // GET method
    // /api/posts/:postId/comments
    // ** include all the post data, like:
    //      likes,
    //      usernames & images sorces
    //      ....
    try {
        const comments = commentsService
            .getPostComments(req.postId, (limit = req.limit), (skip = req.skip))
            .populate('user', 'userBasicData')
            .lean()

        comments.forEach((comment) => {
            comment.likeAmount = likesService.getLikesAmount(
                req.postId,
                comment._id
            )
        })
    } catch (err) {
        res.status(500).json(err).end()
    }
}

const deletePostComment = (req, res) => {
    // delete post comments by :postId & :commentId params
    // DELETE method
    // /api/posts/:postId/comments/:commentId
}

const updatePostComment = (req, res) => {
    // update post comment data by :postId & :commentId params
    // PUT method
    // /api/posts/:postId/comments/:commentId
}

const toggleLikeComment = (req, res) => {
    // add corrent user to comment's likes list
    // POST method
    // /api/posts/:postId/comments/:commentId/like
}

const getCommentById = async (req, res, next) => {
    const commentId = req.params.commentId
    const comment = commentsService.checkComment({postId: req.postId, commentId})
    if (comment) {
        console.log('comment found: ', commentId);
        next()
    } else {
        console.log('comment not found: ', commentId);
        res.status(404).json({ message: 'Comment not found' }).end()
    }
}


module.exports = {
    createPostComment,
    getPostComments,
    deletePostComment,
    updatePostComment,
    toggleLikeComment,
    getCommentById
}
