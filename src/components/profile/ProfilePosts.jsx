import { Link, Switch, Route } from "react-router-dom";
import MyPosts from "../posts/MyPosts";
import SavedPosts from "../posts/SavedPosts";
import TaggedPosts from "../posts/TaggedPosts";
import { PostsWrapper, LinksWrapper, Posts } from "./ProfileStyle";
// import getPosts from "../../services/post-data.js";

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
                <Switch>
                    <Route path="/:username/profile/">
                        <MyPosts />
                    </Route>
                    <Route path="/:username/profile/saved">
                        <SavedPosts />
                    </Route>
                    <Route path="/:username/profile/tagged">
                        <TaggedPosts />
                    </Route>
                </Switch>
            </Posts>
        </PostsWrapper>
    )  
}