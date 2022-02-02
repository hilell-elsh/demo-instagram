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

function toggleLike({ userId, postId, commentId = null }) {
    if (checkLike({ userId, postId, commentId })) {
        return LikeModel.updateOne(
            { postId: postId },
            { $pull: { users: userId } }
        )
    } else {
        return LikeModel.updateOne(
            { postId: postId },
            { $push: { users: userId } }
        )
    }
}

function getLikes(query = {}) {
    return LikeModel.find({ query })
}

function deleteLikes(postId, commentId = null) {
    return LikeModel.findOneAndDelete({
        postId: postId,
        commentId: commentId,
    })
}

function createLikesInstance(postId, commentId = null) {
    const newLike = new LikeModel({
        postId: postId,
        commentId: commentId,
    })
    return newLike.save()
}

function checkLike({ userId, postId, commentId = null }) {
    return Boolean(
        LikeModel.countDocuments({
            postId: postId,
            commentId: commentId,
            users: [userId],
        })
    )
}

module.exports = {
    getLikesAmount,
    deleteLikes,
    createLikesInstance,
    toggleLike,
    checkLike,
    getLikes,
}
