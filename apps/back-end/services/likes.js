const LikeModel = require('../models/like')

async function getLikesAmount(postId, commentId = null) {
    const amount = await LikeModel.find({
        postId: postId,
        commentId: commentId,
    })
        .count()
        .exec()
    console.log(`like services > getLikesAmount > amount: ${amount}`)
    return amount
}

function deleteLikes(query = {}) {
    return LikeModel.deleteMany(query)
}

function getLikes(query = {}) {
    return LikeModel.find({ query })
}

function deleteLike(userId, postId, commentId = null) {
    return LikeModel.findOneAndDelete({
        postId: postId,
        commentId: commentId,
        user: userId,
    })
}

function addLike(userId, postId, commentId = null) {
    const newLike = new LikeModel({
        postId: postId,
        commentId: commentId,
        user: userId,
    })
    return newLike.save()
}

function checkLike(userId, postId, commentId = null) {
    return Boolean(
        LikeModel.countDocuments({
            postId: postId,
            commentId: commentId,
            user: userId,
        })
    )
}

module.exports = {
    getLikesAmount,
    deleteLikes,
    deleteLike,
    addLike,
    checkLike,
    getLikes,
}
