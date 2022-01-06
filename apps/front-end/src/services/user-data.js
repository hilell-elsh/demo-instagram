import { user } from '../ex-apis/user.js'

export function getUser() {
    return user
        // fetch('../ex-apis/posts.json')
        // .then((response) => response.json())
}

export async function getUser2(userId) {
    const path = `/api/users/${userId}`;
    return fetch(path, {
        method: 'GET',
        headers: {
            // 'content-type': 'application/json',
            'accept': 'application/json',
            'user-id': '0'
        }
    })
        .then((res) => res.json())
        .catch((err) => console.log("ERROR: " + err))
        // .then(userData => console.log(userData));

    /* returned:
    {
        _id: String,
        userBasicData: {
            username: String,
            profileImageSrc: String
        },
        additionalData: {
            name: {
                firstName: String,
                lastName: String
            },
            email: String,
            phone: String,
            website: String,
            bio: String,
            gender: String,
            followers: *Number*,
            following: *Number*,
            created: Date,
        },
        posts: {
            postsAmount: Number,
            firstPosts[{
                _id: ObjectId,
                author: {
                    _id: ObjectId,
                    username: String,
                    profileImageSrc: String
                },
                text: String,
                images: [String],
                createdDate: Date,
                location: String,
                allowedComment: Boolean,
                tags: [{
                    _id: ObjectId,
                    tagCode: Number,
                    tagText: String,
                    icon: String
                }],
                userTags: [{
                    _id: ObjectId,
                    username: String,
                    profileImageSrc: String
                }],
            }]
        }
    }
    */
       
}