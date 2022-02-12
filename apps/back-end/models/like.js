const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const LikeSchema = new mongoose.Schema({
    postId: { type: ObjectId, ref: 'Post', required: true },
    commentId: { type: ObjectId, ref: 'Comment' },
    users: { type: [{ type: ObjectId, ref: 'User' }], default: []},
})

// LikeSchema.index({ postId: true, commentId: true})

const LikeModel = mongoose.model('Like', LikeSchema)

module.exports = LikeModel
