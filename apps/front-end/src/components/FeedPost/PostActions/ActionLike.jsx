import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'

import {toggleLikePost} from '../../../services/post-data'

function likePost(contentItem) {
    toggleLikePost(contentItem._id)
    console.log("post", contentItem._id, 'liked'  )
}
export default function ActionLike({ contentItem}) {
    return (
        <Chip 
            onClick={() => likePost(contentItem)}
            icon={
            <Tooltip title="Like">
                <IconButton aria-label="like">
                    <FavoriteIcon  />
                </IconButton>
            </Tooltip>
        } label={contentItem.likesAmount + " Likes"} variant="outlined" />
    )
}
