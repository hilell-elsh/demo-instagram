import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import ActionLike from './PostActions/ActionLike';
import ActionShare from './PostActions/ActionShare';
import ActionAddComment from './PostActions/ActionAddComment'
import ActionEpandMore from './PostActions/ActionEpandMore';

export default function PostActions( {expanded , setExpanded, contentItem} ) {
    return (
        <CardActions disableSpacing>
            	<ActionLike contentItem={contentItem} />
                <ActionShare />
                <ActionAddComment />
                <ActionEpandMore expanded= {expanded} setExpanded= {setExpanded}  />  
        </CardActions>
    )
}