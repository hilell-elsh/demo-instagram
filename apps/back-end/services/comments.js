const CommentModel = require('../models/comment')
const likesService = require('../services/likes')

function createCommentsInstance(postId) {
    const newComment = new CommentModel({postId: postId})
    return newComment.save()
}

function getPostComments(postId, limit = 2, skip = 0) {
    return CommentModel.find({ postId: postId }).skip(skip).limit(limit)
}

function getComment(commentId) {
    return CommentModel.findById(commentId)
}

function getComments(query = {}) {
    return CommentModel.find({ query })
}

async function getCommentsAmount(postId) {
    const amount = await CommentModel.find({ postId: postId }).count().exec()
    console.log(`comment services > getCommentsAmount > amount: ${amount}`)
    return amount
}

async function deleteComment(query = {}) {
    await CommentModel.find(query)
        .select('_id')
        .exec()
        .then((res) => {
            res.map((commentId) => {
                likesService.deleteLikes({commentId: commentId})
                CommentModel.findByIdAndDelete(commentId)                
            })
        })
}

module.exports = {
    createCommentsInstance,
    getPostComments,
    getComment,
    getCommentsAmount,
    deleteComment,
    getComments,
}
