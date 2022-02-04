import styled from 'styled-components'
import { useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux' 

import {
    ModalBackdrop,
    ModalWrapper,
    ModalHeader,
    ModalContent,
    UploadButton,
    ExitButton,
} from './ModalStyle'
import { modalClose } from '../../store/modal'
import { getImageLink } from '../../services/post-data'
// import { image } from '../../../../back-end/services/cloudinary'

const NewPostContent = styled(ModalContent)`
    justify-content: center;
    align-items: center;
`
const NewPostWrapper = styled(ModalWrapper)`
    width: 50%;
    height: 60vh;
`

export default function NewPostModal({setIsNewPostModal}) {
    const dispatch = useDispatch()
    const hiddenInput = useRef(null)
    const handleClick = () => {
        hiddenInput.current.click()
    }



    const uploadImg = useCallback( async () => {
        const filesToUpload = hiddenInput.current?.files
        console.log(hiddenInput.current?.files.length);
        const images = []
        for (let i = 0; i < filesToUpload.length; i++) {
            console.log(filesToUpload[i]);
            const data = new FormData()
            data.append('photo', filesToUpload[i])
            console.log("file:", data);
            images.push( await getImageLink(data))
        }
        console.log(images);
        return images
    }, [hiddenInput])

    return (
        <ModalBackdrop>
            <NewPostWrapper>
                <ModalHeader>
                    <p>Create new post</p>
                    <ExitButton
                        className="fas fa-times"
                        onClick={() => setIsNewPostModal(false)}
                    ></ExitButton>
                </ModalHeader>
                <NewPostContent>
                    <i
                        className="fas fa-photo-video"
                        style={{ fontSize: '10rem', color: 'rgb(209 209 209)' }}
                    ></i>
                    <h2 style={{ marginTop: '1rem' }}>
                        Drag photos here
                    </h2>
                    <UploadButton onClick={handleClick}>
                        Select from computer
                    </UploadButton>
                    <input
                        type="file"
                        ref={hiddenInput}
                        name="picture"
                        style={{ display: 'none' }}
                        onChange={() => uploadImg()}
                        multiple
                    ></input>
                </NewPostContent>
            </NewPostWrapper>
        </ModalBackdrop>
    )
}
