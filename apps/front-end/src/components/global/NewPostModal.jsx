import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ModalBackdrop, ModalWrapper, ModalHeader, ModalContent, UploadButton, ExitButton } from './ModalStyle'
import { modalClose } from '../../store/modal'

const NewPostContent = styled(ModalContent)`
    justify-content: center;
    align-items: center;
`
const NewPostWrapper = styled(ModalWrapper)`
    width: 50%;
`

export default function NewPostModal() {
    const dispatch = useDispatch()

    return (
        <ModalBackdrop>
            <NewPostWrapper>
                <ModalHeader>
                    <p>Create new post</p>
                    <ExitButton className="fas fa-times" onClick={() => dispatch(modalClose())}></ExitButton>
                </ModalHeader>
                <NewPostContent>
                    <i className="fas fa-photo-video" style={{fontSize: '10rem', color: 'rgb(209 209 209)'}}></i>
                    <h2 style={{marginTop: '1rem'}}>Drag photos and videos here</h2>
                    <UploadButton>Select from computer</UploadButton>
                </NewPostContent>
            </NewPostWrapper>
        </ModalBackdrop>
    )
}