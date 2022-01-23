import * as React from 'react'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function ItemText() {
    return (
        <ListItemText
            primary="Avi Moshe"
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        September 17, 2021
                    </Typography>
                    {"I'll be in your neighborhood doing errands this…"}
                    <Chip
                        icon={
                            <Tooltip title="Like">
                                <IconButton aria-label="like">
                                    <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                        }
                        label="579 Likes"
                        variant="outlined"
                    />
                </React.Fragment>
            }
        />
    )
}
