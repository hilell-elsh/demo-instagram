import { Link } from "react-router-dom";
import MyPosts from "./MyPosts";
import { PostsWrapper, LinksWrapper, Posts } from "./ProfileStyle";

export default function ProfilePosts() {
    return (
        <PostsWrapper>
            <LinksWrapper>
                <Link to="/:username/profile/">
                    POSTS
                </Link>
                <Link to="/:username/profile/saved">
                    SAVED
                </Link>
                <Link to="/:username/profile/tagged">
                    TAGGED
                </Link>
            </LinksWrapper>
            <Posts>
                <MyPosts />
            </Posts>
        </PostsWrapper>
    )  
}