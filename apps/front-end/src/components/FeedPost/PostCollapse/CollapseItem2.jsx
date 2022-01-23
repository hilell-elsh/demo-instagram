import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'
import { red, green, blue, orange } from '@mui/material/colors'

export default function CollapseItem2() {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar
                    sx={{ bgcolor: orange[500] }}
                    alt="Israel Israeli"
                    src="/static/images/avatar/2.jpg"
                />
            </ListItemAvatar>
            <ListItemText
                primary="Israel Israeli"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            September 15, 2021
                        </Typography>
                        {"Wish I could come, but I'm out of town this…"}
                        <Chip
                            icon={
                                <Tooltip title="Like">
                                    <IconButton aria-label="like">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                            label="134 Likes"
                            variant="outlined"
                        />
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}
