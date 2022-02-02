import fetching from './basic-fetch'

export function getMe() {
    return fetchInit({})
}

export function updateMe(updateData) {
    return fetchInit({method:'PUT', data:updateData})
}

export function deleteMe() {
    return fetchInit({method:'DELETE'})
}


async function fetchInit ({path="", method='GET', data=null}) {
    path = `/api/me${path}`;
    return await fetching({path, method, data})
}