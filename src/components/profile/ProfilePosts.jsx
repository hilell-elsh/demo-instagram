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
                <Link to="/profile/">
                    POSTS
                </Link>
                <Link to="/profile/saved">
                    SAVED
                </Link>
                <Link to="/profile/tagged">
                    TAGGED
                </Link>
            </LinksWrapper>
            <Posts>
                <Switch>
                    <Route exact path="/profile/">
                        <MyPosts />
                    </Route>
                    <Route path="/profile/saved">
                        <SavedPosts />
                    </Route>
                    <Route path="/profile/tagged">
                        <TaggedPosts />
                    </Route>
                </Switch>
            </Posts>
        </PostsWrapper>
    )  
}