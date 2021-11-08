import { user } from '../../ex-apis/user'

export default function TaggedPosts() {
    return (
        <div>
            {user.posts.taggedPosts.posts}
        </div>
    )
}