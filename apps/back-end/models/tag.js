const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const TagSchema = new mongoose.Schema({
    tagCode: { type: Number, required: true },
    tagText: { type: String, required: true },
    icon: { type: String, required: true },
})

const TagModel = mongoose.model('Tag', TagSchema)

module.exports = TagModel
