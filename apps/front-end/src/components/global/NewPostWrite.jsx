import styled from 'styled-components'

import { createPost } from '../../services/post-data'

const NewPostData = styled.div`
    display: flex;
`


export default function NewPostWrite({imagesUrls, imagesAmount, setIsNewPostModal}) {
    
    function handleSharePost(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        const postData = {}
        data.forEach((value, key) => {
            postData[key] = value
        })
        postData.images = [...imagesUrls]
        createPost(postData).then((res) => {
            setIsNewPostModal(false)
            alert("Your post has posted")
        })
    }

    return (
        <>
            <NewPostData>
                <form onSubmit={handleSharePost}>
                    <textarea name="text" rows="10" placeholder="Write your post..." />
                    <input name="location" type="text" placeholder="location" />

                    <input type="submit" value="Share" disabled={imagesUrls.length === imagesAmount ? false : true}/>
                </form>
            </NewPostData>
            <p>{imagesUrls.join('\n')}</p>
        </>
    )
}