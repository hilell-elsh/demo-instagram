import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Masonry from '@mui/lab/Masonry'
import Stack from '@mui/material/Stack'

import PostBanner from '../global/PostBanner'

function PostStack({item, index}) {
    const [isBanner, setIsBanner] = useState(false)

    return (
        <Stack 
            key={index} 
            style={{position: 'relative'}}
            onMouseEnter={() => setIsBanner(true)}
            onMouseLeave={() => setIsBanner(false)}
            >
                    <img
                        src={`${item.images[0]}?w=162&auto=format`}
                        srcSet={`${item.images[0]}?w=162&auto=format&dpr=2 2x`}
                        alt={item.text}
                        loading="lazy"
                        style={{ borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 4,
                            borderTopLeftRadius: 4,
                            cursor: "pointer"
                        }}
                    />
                    {isBanner && <PostBanner />}
                </Stack>
    )
}

export default function UserPosts({userPosts}) {
    const postLocation = useLocation().pathname.split('/').slice(-1).toString()
    let posts
    switch (postLocation) {
        case 'saved':
            posts = userPosts.savedPosts
            break

        case 'tagged':
            posts = userPosts.taggedPosts
            break

        default:
            posts = userPosts
    }


    return (
        <Masonry columns={3} spacing={1}>
            {posts.map((item, index) => (
                <PostStack item={item} index={index}/>
            ))}
        </Masonry>
    )
}
