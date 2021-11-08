import { Link, Switch, Route } from "react-router-dom";
import MyPosts from "./posts/MyPosts";
import SavedPosts from "./posts/SavedPosts";
import TaggedPosts from "./posts/TaggedPosts"

export default function ProfilePosts() {
    return (
        <>
            <div>
                <Link to="/posts">
                    <button>POSTS</button>
                </Link>
                <Link to="/saved">
                    <button>SAVED</button>
                </Link>
                <Link to="/taged">
                    <button>TAGGED</button>
                </Link>
            </div>
            <div className="posts">
                <Switch>
                    <Route path="/posts">
                        <MyPosts />
                    </Route>
                    <Route path="/saved">
                        <SavedPosts />
                    </Route>
                    <Route path="/tagged">
                        <TaggedPosts />
                    </Route>
                </Switch>
            </div>
        </>
    )  
}