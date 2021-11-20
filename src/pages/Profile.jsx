import ProfileInfo from "../components/profile/ProfileInfo";
import ProfilePosts from "../components/profile/ProfilePosts";
import { ProfileWrapper } from "../components/profile/ProfileStyle.jsx"

export default function ProfilePage() {
    return (
        <ProfileWrapper>
            <ProfileInfo />
            <ProfilePosts />  
        </ProfileWrapper>
    )
}