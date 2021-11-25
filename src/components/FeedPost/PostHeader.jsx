import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red , green ,blue , orange } from '@mui/material/colors';

export default function PostHeader() {
    return (
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    Y
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title="Yossi Cohen"
            subheader="September 14, 2021"
        />
    )
}