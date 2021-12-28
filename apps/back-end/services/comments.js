const CommentModel = require('../models/comment');

function getComments(postId, limit=2, skip=0) {
    CommentModel.countDocuments({postId: postId, commentId: commentId})
}

function getCommentsAmount(postId) {
    CommentModel.countDocuments({postId: postId})
}

module.exports = {
    getComments,
    getCommentsAmount
}