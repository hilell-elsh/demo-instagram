import fetching from './basic-fetch'


export function newComment(postId, commentData) {
    return fetchInit(postId, method='POST', data=commentData)
}

export function getPostComments(postId, skip=0, limit=10) {
    const path = `?skip=${skip}&limit=${limit}`;
    return fetchInit(postId, path)
}

export function deleteComment(postId, commentId) {
    const path = `/${commentId}`
    return fetchInit(postId, path, method='DELETE')
}

export function updateComment(postId, commentId, updateComment) {
    const path = `/${commentId}`
    return fetchInit(postId, path, method='PUT', data=updateComment)
}

export function toggleLikeComment(postId, commentId) {
    const path = `/${commentId}/like`
    return fetchInit(postId, path, method='POST')
}

export function getCommentLikes(postId, commentId) {
    const path = `/${commentId}/likes`
    return fetchInit(postId, path)
}



async function fetchInit (postId, path="", method='GET', data=null) {
    path = `/posts/${postId}/comments${path}`;
    return await fetching(path, method, data)
}