import * as React from 'react';
import Card from '@mui/material/Card';

// FeedPost component imports
import PostHeader from './FeedPost/PostHeader';
import PostMedia from './FeedPost/PostMedia';
import PostContent from './FeedPost/PostContent';
import PostActions from './FeedPost/PostActions';
import PostCollapse from './FeedPost/PostCollapse';

export default function Feed() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Card sx={{ maxWidth: 1080 , marginTop: "5px"}} >
            <PostHeader />
            <PostMedia />
            <PostContent />
            <PostActions expanded= {expanded} setExpanded= {setExpanded}  /> 
            <PostCollapse expanded= {expanded}  />
        </Card>
    )
}