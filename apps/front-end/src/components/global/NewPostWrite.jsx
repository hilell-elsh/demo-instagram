

export default function NewPostWrite({imagesUrls, imagesAmount}) {
    
    return (
        <>
            <div className="postData">
                <p>Write your post here, you have {imagesAmount} images</p>
                <input type="text" placeholder="Write your post here" />
            </div>
            <p>{imagesUrls.join('\n')}</p>
        </>
    )
}