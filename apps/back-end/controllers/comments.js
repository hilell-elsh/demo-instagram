<<<<<<< HEAD
const commentsService = require('../services/comments')
const likesService = require('../services/likes')
=======
const commentsService = require("../services/comments");
const likesService = require("../services/likes");
>>>>>>> c1e61db ( wip)

const createPostComment = (req, res) => {
    // create new post comment, by :postId param
    // POST method
    // /api/posts/:postId/comments

    // postId user text

    try {
        const newComment = commentsService.createComment({
            ...req.body,
            postId: req.postId,
<<<<<<< HEAD
            user: req.curUserId,
        })

        res.status(200).json(newComment).end()
    } catch (err) {
        res.status(500).json(err).end()
    }
}
=======
            user: req.currentUserId,
        });

        res.status(200).json(newComment).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};
>>>>>>> c1e61db ( wip)

const getPostComments = (req, res) => {
    // get all post comments data by :postID param
    // GET method
    // /api/posts/:postId/comments
    // ** include all the post data, like:
    //      likes,
    //      usernames & images sorces
    //      ....
    try {
        const comments = commentsService
            .getPostComments(req.postId, (limit = req.limit), (skip = req.skip))
            .populate("user", "userBasicData")
            .lean();

        comments.forEach((comment) => {
            comment.likeAmount = likesService.getLikesAmount(
                req.postId,
                comment._id
<<<<<<< HEAD
            )
        })
    } catch (err) {
        res.status(500).json(err).end()
    }
}
=======
            );
        });
    } catch (err) {
        res.status(500).json(err).end();
    }
};
>>>>>>> c1e61db ( wip)

const deletePostComment = (req, res) => {
    // delete post comments by :postId & :commentId params
    // DELETE method
    // /api/posts/:postId/comments/:commentId
<<<<<<< HEAD
}
=======
};
>>>>>>> c1e61db ( wip)

const updatePostComment = (req, res) => {
    // update post comment data by :postId & :commentId params
    // PUT method
    // /api/posts/:postId/comments/:commentId
<<<<<<< HEAD
}
=======
};
>>>>>>> c1e61db ( wip)

const toggleLikeComment = (req, res) => {
    // add corrent user to comment's likes list
    // POST method
    // /api/posts/:postId/comments/:commentId/like
<<<<<<< HEAD
}
=======
};
>>>>>>> c1e61db ( wip)

const getCommentById = async (req, res, next) => {
    const postId = req.params.commentId
    const post = postsService.getPost(postId)
    req.postId = postId
    if (post) {
        req.post = post
        req.postId = req.post._id
        next()
    } else {
<<<<<<< HEAD
        res.status(404).json({ message: 'Post not found' }).end()
=======
        res.status(404).json({ message: "Post not found" }).end();
>>>>>>> c1e61db ( wip)
    }
};

module.exports = {
    createPostComment,
    getPostComments,
    deletePostComment,
    updatePostComment,
    toggleLikeComment,
<<<<<<< HEAD
}
=======
};
>>>>>>> c1e61db ( wip)
