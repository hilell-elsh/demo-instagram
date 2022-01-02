const UserModel = require('../models/user');

function createUser (data) {
    const newUser = new UserModel(data);
    return newUser.save();
}

function getUser(userId) {
    return UserModel.findById(userId);    
}

function getUsers(query={}) {
    return UserModel.find({ query })
}

function deleteUser(query={}) {
    return UserModel.findOneAndDelete({ query })    
}

function updateUser(userId, data) {
    return UserModel.findByIdAndUpdate(userId, data)
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
};