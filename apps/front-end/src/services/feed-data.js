import fetching from './basic-fetch'


export async function getFeed(skip=0, limit=20) {
    const path = `/api/feed?skip=${skip}&limit=${limit}`;
    return await fetching({path})
}
