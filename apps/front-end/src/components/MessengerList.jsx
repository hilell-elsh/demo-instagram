import * as React from 'react'
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemButton,
    Avatar,
    Divider,
    Badge,
    Typography,
} from '@mui/material'
import MessengerItem from './MessengerItem'

export default function MessengerList({ massages, numOf = 0 }) {
    console.log('render list...')
    massages.map((massage) => {
        console.log(massage)
    })
    return (
        <nav>
            {massages.map((massage) => {
                return (
                    <MessengerItem key={massage.senderId} chatData={massage} />
                )
            })}
        </nav>
        // <>
        // // ********** try without MUI **************
        //  <nav>
        //     <div className="msgItem">
        //         <Badge badgeContent={1} color="error" sx={{ display: 'inline', margin: '15px' }}>
        //             <Avatar sx={{ bgcolor: orange[500], display: 'inline-block'}} alt="Matthew Kent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwN3Vd48KHkaScpcZvJnSNEE8slCoCa5RJw&usqp=CAU" />
        //         </Badge>
        //         <div className="msgText" style={{display: 'inline-block'}}>
        //             <h5>
        //                 Matthew Kent
        //             </h5>
        //             <p style={{
        //                 color: "blue",
        //                 whiteSpace: 'nowrap',
        //                 width: "200px",
        //                 overflow: 'hidden',
        //                 textOverflow: 'ellipsis'
        //                 }}>

        //                 Long massage Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        //             </p>
        //         </div>
        //     </div>
        // </nav>
        // {/* // ********** try without MUI ************** */}

        // <br/>
        // <br/>
        // // ********** try with MUI **************
        // <br/>
        // <List
        //     sx={{
        //     bgcolor: 'background.paper',
        //     }}
        //     component="nav" aria-label="main mailbox folders"
        // >

        //     <ListItem
        //         sx={{
        //             height: "100px",
        //             width: "1000px",
        //             whiteSpace: 'nowrap',
        //             overflow: 'hidden',
        //             textOverflow: 'ellipsis'

        //         }}
        //         alignItems = "flex-start"
        //     >
        //         <ListItemAvatar>
        //             <Badge  badgeContent={1} color="error">
        //                 <Avatar sx={{ bgcolor: orange[500] }} alt="Matthew Kent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwN3Vd48KHkaScpcZvJnSNEE8slCoCa5RJw&usqp=CAU" />
        //             </Badge>
        //         </ListItemAvatar>
        //         <ListItemText
        //             primary="Matthew Kent"
        //             secondary={
        //                 <Typography
        //                 sx={{
        //                     // display: 'inline',
        //                     // whiteSpace: 'nowrap',
        //                     overflowX: 'hidden',
        //                     textOverflow: 'ellipsis',
        //                     //  height: "20px",
        //                     width: "100px",
        //                     // component="span"
        //                 }}
        //                 >
        //                     Long massage Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        //                 </Typography>
        //             }
        //         />
        //     </ListItem>

        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: green[500] }} alt="Aliyah Hester" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Aliyah Hester" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>

        //         <ListItemAvatar>
        //             <Badge  badgeContent={1} color="error">
        //                 <Avatar sx={{ bgcolor: blue[500] }} alt="Micheal Bright" src="/static/images/avatar/2.jpg" />
        //             </Badge>
        //         </ListItemAvatar>
        //         <ListItemText primary="Micheal Bright" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: red[500] }} alt="Garin Ireland" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Garin Ireland" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: purple[500] }} alt="Hilda Flower" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Hilda Flower" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: lime[500] }} alt="Reema Mcguire" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Reema Mcguire" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: lightGreen[500] }} alt="Kelsea Carrillo" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Kelsea Carrillo" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: deepPurple[500] }} alt="Issac Howard" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Issac Howard" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Florrie Mendez" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Florrie Mendez" secondary="Hello, this is a message" />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: pink[500] }} alt="Matilda Cook" src="/static/images/avatar/2.jpg" />
        //         </ListItemAvatar>
        //         <ListItemText primary="Matilda Cook" secondary="Hello, this is a message" />
        //     </ListItem>

        // </List>
        // {/* // ********** try without MUI ************** */}
        // </>
    )
}
