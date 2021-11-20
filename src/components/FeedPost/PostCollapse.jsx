import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import CollapseItem from './PostCollapse/CollapseItem';
import CollapseItem2 from './PostCollapse/CollapseItem2';
import CollapseItem3 from './PostCollapse/CollapseItem3'

import { red , green ,blue , orange } from '@mui/material/colors';


export default function PostCollapse({expanded}) {
    return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <CollapseItem />
                        <Divider variant="inset" component="li" />
                        <CollapseItem2 />
                        <Divider variant="inset" component="li" />
                        <CollapseItem3 />
                    </List>
                </CardContent>
            </Collapse>
    )
}