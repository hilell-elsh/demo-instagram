const CommentModel = require('../models/comment')

function createComment(data) {
    const newComment = new CommentModel(data)
    return newComment.save()
}

function getPostComments(postId, limit = 2, skip = 0) {
    return CommentModel.find({ postId: postId }).skip(skip).limit(limit)
}

function getComment(commentId) {
    return CommentModel.findById(commentId)
}

async function getCommentsAmount(postId) {
    const amount = await CommentModel.find({ postId: postId }).count().exec()
    console.log(`comment services > getCommentsAmount > amount: ${amount}`)
    return amount
}

function deletePost(postId) {
    return CommentModel.deleteMany({ postId: postId })
}

module.exports = {
    createComment,
    getPostComments,
    getComment,
    getCommentsAmount,
    deletePost,
}
