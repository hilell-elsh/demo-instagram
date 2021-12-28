const CommentModel = require('../models/comment');

function getComments(postId, limit=2, skip=0) {
    return CommentModel.find({postId: postId})
        .skip(skip)
        .limit(limit);
}

function getCommentsAmount(postId) {
    return CommentModel.countDocuments({postId: postId})
}

function deletePost(postId) {
    return CommentModel.deleteMany({postId: postId})
}

module.exports = {
    getComments,
    getCommentsAmount,
    deletePost
}