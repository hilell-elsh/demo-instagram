import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { red , green ,blue , orange } from '@mui/material/colors';

export default function ItemAvatar() {
    return (
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[500] }} alt="Avi Moshe" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
    )
}