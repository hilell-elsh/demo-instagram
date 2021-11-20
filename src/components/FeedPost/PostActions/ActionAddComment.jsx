import AddCommentIcon from '@mui/icons-material/AddComment';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


import { red , green ,blue , orange } from '@mui/material/colors';


export default function ActionAddComment() {
    return (
        <Tooltip title="Add Comment">
            <IconButton aria-label="add comment">
                <AddCommentIcon />
            </IconButton>
        </Tooltip>
    )
}