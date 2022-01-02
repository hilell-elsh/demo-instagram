import { posts } from '../ex-apis/posts.js'

export async function creatrePost(newPostData) {
    // required text, [images src]
    const path = process.env.server_path+'/api/posts';
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPostData)
    });
    return await response.json();
    // returned the new post data, can't change the author
}

export async function getPost(postId) {
    const path = process.env.server_path+`/api/posts/${postId}`;
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
    // returned:
    // post: {
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
    const path = process.env.server_path+`/api/posts/${postId}`;
    const response = await fetch(path, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    return await response.json();
}

export async function deletePost(postId) {
    const path = process.env.server_path+`/api/posts/${postId}`;
    const response = await fetch(path, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export async function toggleLikePost() {
    const path = process.env.server_path+'/api/posts';
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPostData)
    });
    return await response.json();
}