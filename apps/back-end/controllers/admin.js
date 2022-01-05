const postsService = require('../services/posts');
const usersService = require('../services/users');
const tagsService = require('../services/tags');
const likesService = require('../services/likes');
const commentsService = require('../services/comments');


const createUser = async (req, res) => {
    try {
        const user = await usersService.createUser({
            ...req.body
        })
        res
            .status(200)
            .json(user)
            .end();
    } catch (err) {
        console.log(err);
    }
}

const getUser = async (req, res) => {
    res
        .json()
}

module.exports = {
    createUser
};