

const createPost = (req, res) => {
    
    // create new post
    // POST method
    // /api/posts
} 

const getPost = (req, res) => {
    // get post data by :postID param
    // GET method
    // /api/posts/:postId
    // ** include all the post data, like:
    //      comments,
    //      likes,
    //      usernames & images sorces
    //      ....

} 

const deletePost = (req, res) => {
    // delete post by :postId param
    // DELETE method
    // /api/posts/:postId
} 

const updatePost = (req, res) => {
    // update post data by :postId param
    // PUT method
    // /api/posts/:postId
} 

const toggleLikePost = (req, res) => {
    // add corrent user to post's likes list
    // POST method
    // /api/posts/:postId/like
} 

module.exports = {
    createPost,
    getPost,
    deletePost,
    updatePost,
    toggleLikePost
}