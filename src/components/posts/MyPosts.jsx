import { user } from '../../ex-apis/user'

export default function MyPosts() {
    return (
        <div>
            {user.posts.myPosts.posts}
        </div>
    )
}