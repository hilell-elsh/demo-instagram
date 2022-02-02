const PostModel = require('../models/post')
const likesService = require('../services/likes')
const commentsService = require('../services/comments')

function createPost(data) {
    const newPost = new PostModel(data)
    return newPost.save()
}

function getPost(postId) {
    return PostModel.findById(postId)
}

function getPosts(query = {}) {
    return PostModel.find(query)
}

async function deletePost(query = {}) {
    await PostModel.find(query)
    .select('_id')
    .exec()
    .then((res) => {
        res.map((postId) => {
            likesService.deleteLikes({postId: postId})
            commentsService.deleteComment({postId: postId})
            PostModel.findByIdAndDelete(postId)
        })
    })
}

function updatePost(postId, data) {
    return PostModel.findByIdAndUpdate(postId, data)
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost,
}
