import { useRef, useCallback } from 'react'

import { UploadButton } from './ModalStyle'
import { getImageLink } from '../../services/post-data'


export default function newPostStart({setImagesUrls, setStage, imagesUrls, setImagesAmount, imagesAmount}) {

    const hiddenInput = useRef(null)
    const handleClick = () => {
        hiddenInput.current.click()
    }

    const uploadImg = useCallback( async () => {
        setStage(2)
        const filesToUpload = hiddenInput.current?.files
        console.log(hiddenInput.current?.files.length);
        setImagesAmount(imagesAmount+hiddenInput.current?.files.length)
        const images = []
        for (let i = 0; i < filesToUpload.length; i++) {
            console.log(filesToUpload[i]);
            const data = new FormData()
            data.append('photo', filesToUpload[i])
            console.log("file:", data);
            images.push( await getImageLink(data))
        }
        console.log(images);
        setImagesUrls(images)
    }, [hiddenInput])

    return (
        <>
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
        </>
    )
}