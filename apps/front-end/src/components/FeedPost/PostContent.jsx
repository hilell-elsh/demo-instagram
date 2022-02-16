import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import { red, green, blue, orange } from '@mui/material/colors'

export default function PostContent() {
    return (
        <CardContent>
            <Typography variant="h6" color="text.secondary">
                Yossi Cohen
            </Typography>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like. This impressive paella is a
                perfect party dish and a fun meal to cook together with your
                guests.
            </Typography>
            <Chip
                sx={{ bgcolor: green[200] }}
                icon={<FilterHdrIcon />}
                label="Nature"
            />
        </CardContent>
    )
}
