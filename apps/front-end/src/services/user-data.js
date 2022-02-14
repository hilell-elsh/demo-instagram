import fetching from './basic-fetch'

export function getUser(userId) {
    const path = `/${userId}`
    return fetchInit({ path })
}

export function getUserByUsername(username) {
    const path = `/username/${username}`
    return fetchInit({ path })
}

export function getUserPosts(userId, skip = 0, limit = 10) {
    const path = `/${userId}/posts?skip=${skip}&limit=${limit}`
    return fetchInit(path)
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
    return fetchInit({ path })
}

export function getUserFollowers(userId) {
    const path = `/${userId}/followers`
    return fetchInit({ path })
}

/// change arguments to object
function fetchInit({ path = '', method = 'GET', data = null }) {
    path = `/api/users${path}`
    return fetching({ path, method, data })
}
