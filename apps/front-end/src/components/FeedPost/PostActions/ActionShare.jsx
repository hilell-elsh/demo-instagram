import ShareIcon from '@mui/icons-material/Share'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

export default function ActionShare() {
    return (
        <Tooltip title="Share">
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </Tooltip>
    )
}
