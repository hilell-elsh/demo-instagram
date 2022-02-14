const { getId } = require('./object')
const LikeModel = require('../models/like')

async function getLikesAmount(postId, commentId = null) {
    const likes = await LikeModel.findOne({
        postId: postId,
        commentId: commentId,
    }).lean()

    if(likes) {
        console.log(`like services > getLikesAmount > likes:`, likes.users.length)
        return likes.users.length
    } else {
        return 0
    }
    
}

 async function toggleLike({ userId, postId, commentId = null }) {
    const boolean = await checkLike({ userId, postId, commentId })
    if (boolean) {
        await LikeModel.updateOne(
            { postId: postId },
            { $pull: { users: userId.toString() } }
        )
    } else {
        await LikeModel.updateOne(
            { postId: postId },
            { $push: { users: userId } }
        )
    }
    return boolean
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

async function checkLike({ userId, postId, commentId = null }) {
    const likes = await LikeModel.findOne({postId: postId} ).lean()
    return Boolean(
        likes.users.some((user)=> user.equals(getId(userId))) 
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
