import { user } from '../ex-apis/user.js'
import { users } from '../ex-apis/users'

export function getUser(ID=1) {
    const user = users.find(user => user.profile.ID === ID)
    return user
        // fetch('../ex-apis/posts.json')
        // .then((response) => response.json())
}