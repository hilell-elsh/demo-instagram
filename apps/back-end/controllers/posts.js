const postsService = require('../services/posts')
const usersService = require('../services/users')
const tagsService = require('../services/tags')
const likesService = require('../services/likes')
const commentsService = require('../services/comments')
const {getId} = require('../services/object')


const createPost = async (req, res) => {
    const newPost = await postsService.createPost({
        ...req.body,
        author: req.curUserId,
    })
    likesService.createLikesInstance(newPost._id)
    commentsService.createCommentsInstance(newPost._id)
    res.status(200).json(newPost).end()
}

const getPost = async (req, res) => {
    const post = await req.post
                .populate('author', 'userBasicData')
                .populate('tags')
                .populate('userTags', 'userBasicData')
                .lean()
    post.likesAmount = await likesService.getLikesAmount(post._id)
    post.commentsAmount = await commentsService.getCommentsAmount(post._id)

    res.status(200).json(post).end()
}

const deletePost = (req, res) => {
    if (req.curUserId === req.post.author) {
        const { isLikesDeleteSuccess, deletedLikesCount, nLikes } =
            likesService.deletePost(req.post._id)
        const { isCommentsDeleteSuccess, deletedCommentsCount, nComments } =
            commentsService.deletePost(req.post._id)
        const deletedPost = postsService.deletePost(req.post._id)
        if (isCommentsDeleteSuccess && isLikesDeleteSuccess) {
            res.status(200).json({ deletedPost, nComments, nLikes }).end()
        }
    } else {
        res.status(403).json({ massage: 'You are not allowed' }).end()
    }
}

const updatePost = async (req, res) => {
    if (req.curUserId === req.post.author) {
        const updateData = {
            ...req.body,
            author: req.post.author,
            createdDate: req.post.createdDate,
        }
        const updatedPost = await postsService.updatePost(
            req.postId,
            updateData
        )
        res.status(200).json(updatedPost).end()
    } else {
        res.status(403).json({ massage: 'You are not allowed' }).end()
    }
}

const toggleLikePost = async (req, res) => {
    const userId = req.curUserId
    const postId = getId(req.params.postId) 
    const updateData = await likesService.toggleLike({userId, postId})

    if(!updateData) {
        res.status(200).json('user liked the post')
    } else {
        res.status(200).json('user unliked the post')
    }
}

const getPostLikes = (req, res) => {
    // pass
}

// inside help middleware
const getPostById = async (req, res, next) => {
    const postId = req.params.postId
    const post = await postsService.getPost(postId)
    req.postId = postId
    if (post) {
        req.post = post
        req.postId = req.post._id
        next()
    } else {
        res.status(404).json({ message: 'Post not found' }).end()
    }
}

const getPosts = async (req, res) => {
    const query = req.query.text;
    if (query.length <=2) {
        return res.status(404).json({ message: ''}).end()
    }

}

module.exports = {
    createPost,
    getPost,
    deletePost,
    updatePost,
    toggleLikePost,
    getPostLikes,
    getPostById,
}
