const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const LikeSchema = new mongoose.Schema({
    postId: { type: ObjectId, ref: 'Post', required: true },
    commentId: { type: ObjectId, ref: 'Comment' },
    users: [{ type: ObjectId, ref: 'User', required: true }],
})

LikeSchema.index({ postId: true, commentId: true, user: true}, {unique: true})

const LikeModel = mongoose.model('Like', LikeSchema)

module.exports = LikeModel
