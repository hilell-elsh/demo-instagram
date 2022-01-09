import fetching from './basic-fetch'


export async function createPost(newPostData) {
    // required text, [images src]
    // const path = '/api/posts';
    return fetchInit(method='POST', data=newPostData);
    // returned the new post data, can't change the author
}

export async function getPost(postId) {
    const path = `/${postId}`;
    return fetch(path);

    // returned:
    // {
    //     _id : ObjectId,
    //     author: {
    //         userId: ObjectId,
    //         userBasicData: {
    //             username: string,
    //             profileImageSrc: String
    //         }
    //     }
    //     text: string,
    //     images: [string],
    //     createDate: Date
    //     location: string,
    //     allowedComment: boolean,
    //     tags: [{
    //             tagCode: Number,
    //             tagText: String,
    //             icon: String
    //         }],
    //     userTags: [{
    //         userId: ObjectId,
    //         userBasicData: {
    //             username: string,
    //             profileImageSrc: String
    //         }
    //     }],
    //     likesAmount: Number,
    //     commentsAmount: Number
    // }
}

export async function updatePost(postId, updateData) {
    const path = `/${postId}`;
    return fetchInit(path, method='PUT', data=updateData)
}

export async function deletePost(postId) {
    const path = `/${postId}`;
    return fetchInit(path, method='DELETE')
}

export async function toggleLikePost() {
    const path = '/api/posts';
    return fetchInit(path, method='PUT')
}

export function uploadImage(image) {
    pass
    // '/api/upload'
    // method 'POST'
}

export function getPostLikes(postId, skip=0, limit=10) {
    const path = `/${postId}/likes?skip=${skip}&limit=${limit}`;
    return fetchInit(path)
}

export function savePost(postId){
    const path = `/${postId}/save`;
    fetchInit(path, method='PUT')
}


async function fetchInit (path="", method='GET', data=null) {
    path = `/posts${path}`;
    return await fetching(path, method, data)
}