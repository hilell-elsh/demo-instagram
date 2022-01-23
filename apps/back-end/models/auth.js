const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const AuthSchema = new mongoose.Schema({
    userId: { type: ObjectId, ref: 'User', required: true },
    password: { type: String, required: true },
    token: {type: String, default: ''}
})

const AuthModel = mongoose.model('Auth', AuthSchema)

module.exports = AuthModel
