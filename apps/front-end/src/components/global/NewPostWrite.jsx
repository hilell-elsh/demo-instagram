import styled from 'styled-components'

const NewPostData = styled.div`
    display: flex;
`

export default function NewPostWrite({imagesUrls, imagesAmount}) {
    
    return (
        <>
            <NewPostData>
                <form>
                    <textarea name="text" rows="10" placeholder="Write your post..." />
                    <input name="location" type="text" placeholder="location" />

                    <button>Share</button>
                </form>
            </NewPostData>
            <p>{imagesUrls.join('\n')}</p>
        </>
    )
}