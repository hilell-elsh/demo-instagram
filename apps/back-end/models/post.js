const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const PostSchema = new mongoose.Schema({
    author: {type: ObjectId, required: true},
    text: {type: String, required: true},
    images: {type: [String], required: true},
    createdDate: {type: Date, default: Date.now},
    location: String,
    allowedComment: {type: Boolean, default: true, required: true},
    tags: [ObjectId],
    userTags: [ObjectId],
    reactions: {
        likes: [ObjectId],
        comments: [{
            user: ObjectId,
            text: String,
            createdDate: Date,
            likes: [ObjectId]
        }]
    }
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;