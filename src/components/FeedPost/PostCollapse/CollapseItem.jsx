import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { red , green ,blue , orange } from '@mui/material/colors';


export default function CollapseItem() {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[500] }} alt="Avi Moshe" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
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
                        <Chip icon={
                            <Tooltip title="Like">
                                <IconButton aria-label="like">
                                    <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                        } label="579 Likes" variant="outlined" />
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}