import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { red } from '@mui/material/colors';

import {toggleLikePost} from '../../../services/post-data'
import { useState } from 'react'

function likePost(contentItem) {
    toggleLikePost(contentItem._id)
    console.log("post", contentItem._id, 'liked'  )
}
export default function ActionLike({ contentItem}) {

    const [isLiked, setIsLiked] = useState(contentItem.isLiked = false)
    const [likesAmount, setLikesAmount] = useState(contentItem.likesAmount)  

    return (
        <Chip 
            onClick={() => {
                likePost(contentItem)
                if (isLiked) {
                    setLikesAmount( likesAmount-1)
                } else {
                    setLikesAmount( likesAmount+1 )
                }
                setIsLiked(!isLiked)
                }       
            }
            icon={
            <Tooltip title="Like">
                <IconButton aria-label="like">
                {isLiked ? <FavoriteIcon sx={{ color: red[500] }} /> : <FavoriteIcon  />}
                </IconButton>
            </Tooltip>
        } label={likesAmount + " Likes"} variant="outlined" />
    )
}
