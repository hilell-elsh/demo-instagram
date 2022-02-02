import * as React from 'react'
import Card from '@mui/material/Card'

// FeedPost component imports
import PostHeader from './FeedPost/PostHeader'
import PostMedia from './FeedPost/PostMedia'
import PostContent from './FeedPost/PostContent'
import PostActions from './FeedPost/PostActions'
import PostCollapse from './FeedPost/PostCollapse'

export default function Feed({ contentItem }) {
    const [expanded, setExpanded] = React.useState(false);
    const { postHeader, postContent, postMedia } = React.useMemo(() => {
        return {
            postHeader: <PostHeader contentItem={contentItem} />,
            postContent: <PostContent contentItem={contentItem} />,
            postMedia: <PostMedia contentItem={contentItem} />,
        };
    }, []);

    return (
        <Card sx={{ maxWidth: 1080, marginTop: '5px' }}>
            {postHeader}
            {postMedia}
            {postContent}
            <PostActions
                contentItem={contentItem}
                expanded={expanded}
                setExpanded={setExpanded}
            />
            <PostCollapse expanded={expanded} />
        </Card>
    )
}
