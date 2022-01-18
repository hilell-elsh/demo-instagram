import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import { red , green ,blue , orange } from '@mui/material/colors';

export default function PostContent({ contentItem}) {
    return (
        <CardContent>
            <Typography variant="h6" color="text.secondary">
                {contentItem.author.userBasicData.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {contentItem.text}
            </Typography>
            <Chip 
                sx={{ bgcolor: green[200] }} 
                icon={<FilterHdrIcon />} 
                label="Nature" 
            />
        </CardContent>
    )
}