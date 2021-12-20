const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const UserSchema = new mongoose.Schema({
    userBasicData: {
        username: {type: String, required: true},
        profileImageSrc: String
    },
    additionalData: {
        name: {
            firstName: String,
            lastName: String
        },
        email: {
            type: String,
            required: true,
            validate: emailRegex.test
        },
        phone: String,
        website: String,
        bio: String,
        gender: String,
        followers: [ObjectId],
        following: [ObjectId],
        created: {type: Date, default: Date.now},
    },
    posts: {
        myPosts: [ObjectId],
        taggedPosts: [ObjectId],
        savedPosts: [ObjectId]
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;