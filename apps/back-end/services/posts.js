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
    return await PostModel.find(query)
        .select('_id')
        .then((res) => {
            return Promise.all(
                res.map(async (postId) => {
                    likesService.deleteLikes({ postId: postId })
                    commentsService.deleteComment({ postId: postId })
                    const post = PostModel.findByIdAndDelete(postId)
                    return post
                })
            )
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
