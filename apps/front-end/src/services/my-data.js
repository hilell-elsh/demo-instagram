import fetching from './basic-fetch'

export function getMe() {
    return fetchInit()
}

export function updateMe(updateData) {
    return fetchInit(method='PUT', updateData)
}

export function deleteMe() {
    return fetchInit(method='DELETE')
}


async function fetchInit (path="", method='GET', data=null) {
    path = `/me${path}`;
    return await fetching(path, method, data)
}