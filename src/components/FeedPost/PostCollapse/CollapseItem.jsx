import ListItem from '@mui/material/ListItem';
import ItemAvatar from './CollapsItem/ItemAvatar'
import ItemText from './CollapsItem/ItemText';


export default function CollapseItem() {
    return (
        <ListItem alignItems="flex-start" >
            <ItemAvatar />
            <ItemText />
        </ListItem>
    )
}