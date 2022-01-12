import fetching from './basic-fetch'


export function getFeed(skip=0, limit=20) {
    const path = `/api/feed?skip=${skip}&limit=${limit}`;
    return fetching({path})
}