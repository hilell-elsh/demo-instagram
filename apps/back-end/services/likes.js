const LikeModel = require('../models/like')

async function getLikesAmount(postId, commentId = null) {
    const likes = await LikeModel.findOne({
        postId: postId,
        commentId: commentId,
    }).lean()
    console.log(`like services > getLikesAmount > likes:`, likes.users.length)
    return likes.users.length
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
        users: []
    })
    return newLike.save()
}

function checkLike({ userId, postId, commentId = null }) {
    return Boolean(
        LikeModel.countDocuments({
            postId: postId,
            commentId: commentId,
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
