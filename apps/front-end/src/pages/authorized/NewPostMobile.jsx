import styled from 'styled-components'
import { useState } from 'react'

import NewPostStart from '../../components/global/NewPostStart'
import NewPostWrite from '../../components/global/NewPostWrite'
import {FormWrapper} from '../../components/form/FormStyle'
    
const NewPostMobileWrapper = styled(FormWrapper)`
    display: none;
    @media (max-width: 850px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default function NewPostMobile() {
    const [stage, setStage] = useState(1)
    const [imagesUrls, setImagesUrls] = useState([])
    const [imagesAmount, setImagesAmount] = useState(0)

    return (
        
            <NewPostMobileWrapper>
                <h1>
                    <p>Create new post</p>
                </h1>
                <div>
                    {stage === 1 ? (
                        <NewPostStart
                            imagesUrls={imagesUrls}
                            setImagesUrls={setImagesUrls}
                            imagesAmount={imagesAmount}
                            setImagesAmount={setImagesAmount}
                            setStage={setStage}
                        />
                    ) : (
                        <NewPostWrite
                            setIsNewPostModal={setIsNewPostModal}
                            imagesUrls={imagesUrls}
                            imagesAmount={imagesAmount}
                        />
                    )}
                </div>
            </NewPostMobileWrapper>
    )
}