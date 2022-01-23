const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const CommentSchema = new mongoose.Schema({
    postId: { type: ObjectId, ref: 'Post', required: true },
    user: { type: ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
})

const CommentModel = mongoose.model('Comment', CommentSchema)

module.exports = CommentModel
