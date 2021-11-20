export default function getPosts() {
    return fetch('../ex-apis/posts')
        .then((response) => response.json())
}