import * as React from 'react'
import CardActions from '@mui/material/CardActions'
import ActionLike from './PostActions/ActionLike'
import ActionShare from './PostActions/ActionShare'
import ActionAddComment from './PostActions/ActionAddComment'
import ActionEpandMore from './PostActions/ActionEpandMore'

export default function PostActions({ expanded, setExpanded }) {
    return (
        <CardActions disableSpacing>
            <ActionLike />
            <ActionShare />
            <ActionAddComment />
            <ActionEpandMore expanded={expanded} setExpanded={setExpanded} />
        </CardActions>
    )
}
