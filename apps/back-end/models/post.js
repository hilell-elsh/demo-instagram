const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const PostSchema = new mongoose.Schema({
    author: {type: ObjectId, required: true, ref: 'User'},
    text: {type: String, required: true},
    images: {type: [String], required: true},
    createdDate: {type: Date, default: Date.now},
    location: String,
    allowedComment: {type: Boolean, default: true, required: true},
    tags: [{type: ObjectId, ref: 'Tag'}],
    userTags: [{type: ObjectId, ref: 'User'}],
}, {toObject: { virtuals: true }, toJSON: { virtuals: true } });

PostSchema.virtual('tagsCount').get(function() {
    return this.tags.length
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;