import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { FormButton, FormInput, EditWrapper } from '../form/FormStyle'

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
    const user = useSelector((state) => state.user.user)
    
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
                        user.additionalData.name.firstName +
                        ' ' +
                        user.additionalData.name.lastName
                    }
                />
            </label>
            <label>
                Username
                <FormInput type="text" placeholder={user.userBasicData.username} />
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
                <FormInput type="Email" placeholder={user.additionalData.email} />
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
