import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import { red , green ,blue , orange , purple , lime, lightGreen , deepPurple , deepOrange , pink } from '@mui/material/colors';



export default function MessengerList() {
    return (
        <List
            sx={{
            bgcolor: 'background.paper',
            }}
            component="nav" aria-label="main mailbox folders"
        >
        
            <ListItem>
                <ListItemAvatar>
                    <Badge  badgeContent={1} color="error">
                        <Avatar sx={{ bgcolor: orange[500] }} alt="Matthew Kent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwN3Vd48KHkaScpcZvJnSNEE8slCoCa5RJw&usqp=CAU" />
                    </Badge>
                </ListItemAvatar>
                <ListItemText primary="Matthew Kent" secondary="Hello, this is a message" />
            </ListItem>

            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[500] }} alt="Aliyah Hester" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Aliyah Hester" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                
                <ListItemAvatar>
                    <Badge  badgeContent={1} color="error">
                        <Avatar sx={{ bgcolor: blue[500] }} alt="Micheal Bright" src="/static/images/avatar/2.jpg" />
                    </Badge>
                </ListItemAvatar>
                <ListItemText primary="Micheal Bright" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: red[500] }} alt="Garin Ireland" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Garin Ireland" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: purple[500] }} alt="Hilda Flower" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Hilda Flower" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: lime[500] }} alt="Reema Mcguire" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Reema Mcguire" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: lightGreen[500] }} alt="Kelsea Carrillo" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Kelsea Carrillo" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepPurple[500] }} alt="Issac Howard" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Issac Howard" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Florrie Mendez" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Florrie Mendez" secondary="Hello, this is a message" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: pink[500] }} alt="Matilda Cook" src="/static/images/avatar/2.jpg" /> 
                </ListItemAvatar>
                <ListItemText primary="Matilda Cook" secondary="Hello, this is a message" />
            </ListItem>

        </List>
    )
}