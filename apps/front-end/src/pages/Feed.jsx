import Feed from "../components/FeedPost";
import {getFeed} from "../services/feed-data"


export default function PageFeed() {
    const feed = getFeed()
    
   const feedList =
    [
        {
            "_id": "61e4416f5f5ab74cebc66d5f",
            "author": {
                "_id": "61e3f85b5f5ab74cebc66d4e",
                "userBasicData": {
                    "username": "maor"
                }
            },
            "text": "try to create post",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliWdjLDZcHm3GcRkmYZMN5X1IR7UbpW3DxKNxzdGbH1r_getP5wPNBjT9pRlhO2tg2vg&usqp=CAU"
            ],
            "allowedComment": true,
            "tags": [],
            "userTags": [],
            "createdDate": "2022-01-16T16:01:51.739Z",
            "__v": 0,
            "likesAmount": 9,
            "commentsAmount": 0
        },
        {
            "_id": "61e444195f5ab74cebc66d73",
            "author": {
                "_id": "61e3f85b5f5ab74cebc66d4e",
                "userBasicData": {
                    "username": "hilell"
                }
            },
            "text": "try to create second post",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliWdjLDZcHm3GcRkmYZMN5X1IR7UbpW3DxKNxzdGbH1r_getP5wPNBjT9pRlhO2tg2vg&usqp=CAU"
            ],
            "allowedComment": true,
            "tags": [],
            "userTags": [],
            "createdDate": "2022-01-16T16:13:13.456Z",
            "__v": 0,
            "likesAmount": 0,
            "commentsAmount": 0
        },
        {
            "_id": "61e4442c5f5ab74cebc66d76",
            "author": {
                "_id": "61e085400b435d82ce477669",
                "userBasicData": {
                    "username": "shimon4975329"
                }
            },
            "text": "try to create another user post",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliWdjLDZcHm3GcRkmYZMN5X1IR7UbpW3DxKNxzdGbH1r_getP5wPNBjT9pRlhO2tg2vg&usqp=CAU"
            ],
            "allowedComment": true,
            "tags": [],
            "userTags": [],
            "createdDate": "2022-01-16T16:13:32.474Z",
            "__v": 0,
            "likesAmount": 0,
            "commentsAmount": 0
        },
        {
            "_id": "61e575b89cdbde929fff2bd5",
            "author": {
                "_id": "61e085400b435d82ce477669",
                "userBasicData": {
                    "username": "shimon4975329"
                }
            },
            "text": "try to create another user post",
            "images": [
                "https://res.cloudinary.com/dgc53weio/image/upload/v1642428218/nfuoyusuisphberysi1u.jpg"
            ],
            "allowedComment": true,
            "tags": [],
            "userTags": [],
            "createdDate": "2022-01-17T13:57:12.596Z",
            "__v": 0,
            "likesAmount": 0,
            "commentsAmount": 0
        }
    ]
    
    return (
        <div>
            {feedList.map( contentItem => {return <Feed contentItem={contentItem} />})}
        </div>
            
    )
}