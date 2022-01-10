const CommentModel = require('../models/comment');

function createComment (data) {
    const newComment = new CommentModel(data);
    return newComment.save();
}

function getPostComments(postId, limit=2, skip=0) {
    return CommentModel.find({postId: postId})
        .skip(skip)
        .limit(limit);
}

function getComment(commentId) {
    return CommentModel.findById(commentId);    
}

function getCommentsAmount(postId) {
    return CommentModel.countDocuments({postId: postId})
}

function deletePost(postId) {
    return CommentModel.deleteMany({postId: postId})
}

module.exports = {
    createComment,
    getPostComments,
    getComment,
    getCommentsAmount,
    deletePost
}