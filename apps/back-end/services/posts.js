const PostModel = require('../models/post');

function createPost (data) {
    const newPost = new PostModel(data);
    return newPost.save();
}

function getPost(postId) {
    return PostModel.findById(postId);    
}

function getPosts(query={}) {
    return PostModel.find({ query })
}

function deletePost(postId) {
    return PostModel.findByIdAndDelete(postId)    
}

function updatePost(query={}, data) {
    return PostModel.findOneAndUpdate(query, data)
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost
};