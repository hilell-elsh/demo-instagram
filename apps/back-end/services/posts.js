const PostModel = require('../models/post');

function createPost (data) {
    const newPost = new PostModel(data);
    return newPost.save();
}

function getPost(query={}) {
    return PostModel.findOne({ query })    
}

function getPosts(query={}) {
    return PostModel.find({ query })
}

function deletePost(query={}) {
    return PostModel.findOneAndDelete({ query })    
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