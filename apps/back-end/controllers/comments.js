

const createPostComment = (req, res) => {
    // create new post comment, by :postId param
    // POST method
    // /api/posts/:postId/comments
} 

const getPostComments = (req, res) => {
    // get all post comments data by :postID param
    // GET method
    // /api/posts/:postId/comments
    // ** include all the post data, like:
    //      likes,
    //      usernames & images sorces
    //      ....

} 

const deletePostComment = (req, res) => {
    // delete post comments by :postId & :commentId params
    // DELETE method
    // /api/posts/:postId/comments/:commentId
} 

const updatePostComment = (req, res) => {
    // update post comment data by :postId & :commentId params
    // PUT method
    // /api/posts/:postId/comments/:commentId
} 

const toggleLikeComment = (req, res) => {
    // add corrent user to comment's likes list
    // POST method
    // /api/posts/:postId/comments/:commentId/like
} 

module.exports = {
    createPostComment,
    getPostComments,
    deletePostComment,
    updatePostComment,
    toggleLikeComment
}