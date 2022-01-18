import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ActionLike({ contentItem}) {
    return (
        <Chip icon={
            <Tooltip title="Like">
                <IconButton aria-label="like">
                    <FavoriteIcon />
                </IconButton>
            </Tooltip>
        } label={contentItem.likesAmount + " Likes"} variant="outlined" />
    )
}