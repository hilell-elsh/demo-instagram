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
}