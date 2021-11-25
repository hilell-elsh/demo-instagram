import  Masonry from '@mui/lab/Masonry'
import Stack from '@mui/material/Stack'
import { getPosts } from '../../services/post-data.js'

export default function TaggedPosts() {
    const posts = getPosts()

    return (
        <Masonry columns={3} spacing={1}>
        {posts.map((item, index) => (
            <Stack key={index}>
            <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 4,
                        borderTopLeftRadius: 4,
                        cursor: "pointer"
                        }}
            />
            </Stack>
        ))}
     </Masonry>
    )
}