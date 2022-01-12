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
    let amount;
    const updateCount = (num) => {
        amount += num
    }
    CommentModel.countDocuments({postId: postId}, (err, count) => {
            updateCount(count)
        })
    console.log(`comments services > getCommentsAmount > post: ${postId}, count: ${amount}`)
    return amount;
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