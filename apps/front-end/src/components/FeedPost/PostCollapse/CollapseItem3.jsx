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

export default function CollapseItem3() {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar
                    sx={{ bgcolor: green[500] }}
                    alt="Dana Nama"
                    src="/static/images/avatar/3.jpg"
                />
            </ListItemAvatar>
            <ListItemText
                primary="Dana Nama"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            September 14, 2021
                        </Typography>
                        {'Do you have Paris recommendations?'}
                        <Chip
                            icon={
                                <Tooltip title="Like">
                                    <IconButton aria-label="like">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                            label="149 Likes"
                            variant="outlined"
                        />
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}
