const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

function getId(id) {
    return new ObjectId(id)
}

module.exports = {
    getId
}