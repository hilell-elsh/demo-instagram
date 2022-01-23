import { FormButton, FormInput, EditWrapper } from '../form/FormStyle'
import { user } from '../../ex-apis/user'
import styled from 'styled-components'

const EditButton = styled(FormButton)`
    width: 12vw;
`
const ProfilePicButton = styled(EditButton)`
    background-color: #63c0fd;

    &:hover {
        background-color: rgb(0, 149, 246);
    }
`

export default function EditProfile() {
    return (
        <EditWrapper>
            <label>
                <ProfilePicButton>Change Profile Pic</ProfilePicButton>
            </label>
            <label>
                Name
                <FormInput
                    type="text"
                    placeholder={
                        user.profile.name.firstName +
                        ' ' +
                        user.profile.name.lastName
                    }
                />
            </label>
            <label>
                Username
                <FormInput type="text" placeholder={user.profile.username} />
            </label>
            <label>
                Website
                <FormInput type="text" placeholder="Website" />
            </label>
            <label>
                Bio
                <FormInput type="text" placeholder="Bio" />
            </label>
            <label>
                Email
                <FormInput type="Email" placeholder="Email" />
            </label>
            <label>
                Phone
                <FormInput
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{7}"
                    placeholder="Phone Number"
                />
            </label>
            <EditButton>Submit Changes</EditButton>
        </EditWrapper>
    )
}
