const LikeModel = require('../models/like');

function getLikesAmount(postId, commentId=null) {
    return LikeModel.countDocuments({postId: postId, commentId: commentId})
}

function deletePost(postId) {
    return LikeModel.deleteMany({postId: postId})
}

module.exports = {
    getLikesAmount,
    deletePost
}