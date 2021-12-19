const UserModel = require('../models/user');

function createUser (data) {
    const newUser = new UserModel(data);
    return newUser.save();
}

function getUser(query={}) {
    return UserModel.findOne({ query })    
}

function getUsers(query={}) {
    return UserModel.find({ query })
}

function deleteUser(query={}) {
    return UserModel.findOneAndDelete({ query })    
}

function updateUser(query={}, data) {
    return UserModel.findOneAndUpdate(query, data)
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
};