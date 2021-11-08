import { user } from '../../ex-apis/user'

export default function SavedPosts() {
    return (
        <div>
            {user.posts.savedPosts.posts}
        </div>
    )
}