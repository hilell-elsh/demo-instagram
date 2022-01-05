const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

function getId(id) {
    return ObjectId(id)
}

module.exports = {
    getId
}