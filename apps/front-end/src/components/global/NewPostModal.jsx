import styled from 'styled-components'
import { useRef } from 'react'
import {
    ModalBackdrop,
    ModalWrapper,
    ModalHeader,
    ModalContent,
    UploadButton,
    ExitButton,
} from './ModalStyle'
import { modalClose } from '../../store/modal'

const NewPostContent = styled(ModalContent)`
    justify-content: center;
    align-items: center;
`
const NewPostWrapper = styled(ModalWrapper)`
    width: 50%;
    height: 60vh;
`

export default function NewPostModal({setIsNewPostModal}) {
    const hiddenInput = useRef(null)
    const handleClick = () => {
        hiddenInput.current.click()
    }

    const uploadImg = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'kilogram')
        setLoading(true)
        const res = await fetch('https://')
    }
    
    return (
        <ModalBackdrop>
            <NewPostWrapper>
                <ModalHeader>
                    <p>Create new post</p>
                    <ExitButton
                        className="fas fa-times"
                        onClick={() => dispatch(modalClose())}
                    ></ExitButton>
                </ModalHeader>
                <NewPostContent>
                    <i
                        className="fas fa-photo-video"
                        style={{ fontSize: '10rem', color: 'rgb(209 209 209)' }}
                    ></i>
                    <h2 style={{ marginTop: '1rem' }}>
                        Drag photos and videos here
                    </h2>
                    <UploadButton onClick={handleClick}>
                        Select from computer
                    </UploadButton>
                    <input
                        type="file"
                        ref={hiddenInput}
                        name="picture"
                        style={{ display: 'none' }}
                        onChange={uploadImg}
                    ></input>
                </NewPostContent>
            </NewPostWrapper>
        </ModalBackdrop>
    )
}
