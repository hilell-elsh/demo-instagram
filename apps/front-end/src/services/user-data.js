import fetching from './basic-fetch'

export function getUser(userId) {
    const path = `/${userId}`
    return fetchInit({ path })

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

export function getUserPosts(userId, skip = 0, limit = 10) {
    const path = `/${userId}/posts?skip=${skip}&limit=${limit}`
    return fetchInit(path)

    /* returned: 
    [{
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
    */
}

export function toggleFollowUser(userId) {
    const path = `/${userId}/follow`
    return fetching({ path, method: 'PUT' })

    /* returned:
    {
        isFollow: Boolean
    }
    */
}

export function getUserFollowing(userId) {
    const path = `/${userId}/following`
    return fetching({ path })
}

export function getUserFollowers(userId) {
    const path = `/${userId}/followers`
    return fetching({ path })
}

/// change arguments to object
function fetchInit({ path = '', method = 'GET', data = null }) {
    path = `/api/users${path}`
    return fetching({ path, method, data })
}
