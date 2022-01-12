const TagModel = require('../models/tag');

function createTag (data) {
    const newTag = new TagModel(data);
    return newTag.save();
}

function getTag(tagId) {
    return TagModel.findById(tagId)    
}

function getTags(query={}) {
    return TagModel.find(query)
}

function deleteTag(query={}) {
    return TagModel.findOneAndDelete(query)    
}

function updateTag(query={}, data) {
    return TagModel.findOneAndUpdate(query, data)
}

module.exports = {
    createTag,
    getTag,
    getTags,
    deleteTag,
    updateTag
};