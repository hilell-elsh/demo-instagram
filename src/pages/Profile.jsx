import { Route, Switch } from "react-router";
import EditProfile from "./EditProfile";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfilePosts from "../components/profile/ProfilePosts";
import { ProfileWrapper } from "../components/profile/ProfileStyle.jsx"

export default function ProfilePage() {
    return (
        <Switch>
            <ProfileWrapper>
                <ProfileInfo />
                <Route exact path="/profile/">
                    <ProfilePosts />
                </Route>
                <Route path="/profile/edit">
                     <EditProfile />
                </Route>
            </ProfileWrapper>
        </Switch>
    )
}