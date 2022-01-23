import { useLocation } from 'react-router-dom'
import Masonry from '@mui/lab/Masonry'
import Stack from '@mui/material/Stack'

import { getUser } from '../../services/user-data.js'

export default function MyPosts() {
    const location = useLocation()
    const postLocation = location.pathname.split('/').slice(-1).toString()
    let posts

    switch (postLocation) {
        case 'saved':
            posts = getUser().profile.posts.savedPosts
            break

        case 'tagged':
            posts = getUser().profile.posts.taggedPosts
            break

        default:
            posts = getUser().profile.posts.myPosts
    }

    return (
        <Masonry columns={3} spacing={1}>
            {posts.map((item, index) => (
                <Stack key={index}>
                    <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 4,
                            borderTopLeftRadius: 4,
                            cursor: 'pointer',
                        }}
                    />
                </Stack>
            ))}
        </Masonry>
    )
}
