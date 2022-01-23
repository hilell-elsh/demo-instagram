import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function ActionLike() {
    return (
        <Chip
            icon={
                <Tooltip title="Like">
                    <IconButton aria-label="like">
                        <FavoriteIcon />
                    </IconButton>
                </Tooltip>
            }
            label="1,549 Likes"
            variant="outlined"
        />
    )
}
