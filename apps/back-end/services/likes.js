const LikeModel = require('../models/like');

function getLikesAmount(postId, commentId=null) {
    LikeModel.countDocuments({postId: postId, commentId: commentId})
}

module.exports = {
    getLikesAmount
}