import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux' 

import NewPostStart from './NewPostStart'
import NewPostWrite from './NewPostWrite'


import {
    ModalBackdrop,
    ModalWrapper,
    ModalHeader,
    ModalContent,
    ExitButton,
} from './ModalStyle'

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

    const [stage, setStage] = useState(1)
    const [imagesUrls, setImagesUrls] = useState([])
    const [imagesAmount, setImagesAmount] = useState(0)


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
                    {stage === 1
                        ? <NewPostStart
                            imagesUrls={imagesUrls}
                            setImagesUrls={setImagesUrls}
                            imagesAmount={imagesAmount}
                            setImagesAmount={setImagesAmount}
                            setStage={setStage}
                        />
                        : <NewPostWrite 
                            imagesUrls={imagesUrls}
                            imagesAmount={imagesAmount}
                        />}
                </NewPostContent>
            </NewPostWrapper>
        </ModalBackdrop>
    )
}
