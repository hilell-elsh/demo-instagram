import { Badge, Avatar } from '@mui/material'
import {
    red,
    green,
    blue,
    orange,
    purple,
    lime,
    lightGreen,
    deepPurple,
    deepOrange,
    pink,
} from '@mui/material/colors'

import { getUser } from '../services/user-data'

export default function MessengerItem({ chatData }) {
    const user = getUser(chatData.senderId)
    let unreadMessages = 0
    let readed = false
    debugger
    while (!readed && unreadMessages < chatData.massages.length) {
        if (chatData.massages[unreadMessages].readed === true) {
            readed = true
        } else {
            unreadMessages++
        }
    }
    return (
        // option 1 without MUI
        <div className="msgItem">
            <Badge
                badgeContent={unreadMessages}
                color="error"
                sx={{ display: 'inline-block', margin: '15px' }}
            >
                <Avatar
                    sx={{ bgcolor: orange[500] }}
                    alt={user.profile.name.fullName}
                    src={user.profile.image.src}
                />
            </Badge>
            <div className="msgText" style={{ display: 'inline-block' }}>
                <h5>{user.profile.name.fullName}</h5>
                <p
                    style={{
                        color: 'gray',
                        whiteSpace: 'nowrap',
                        width: '200px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {chatData.massages[0].massage}
                </p>
            </div>
        </div>

        // option 2 with MUI
        // <>
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
        //                 <Avatar sx={{ bgcolor: orange[500] }} alt={user.profile.name.fullName} src={user.profile.image.src} />
        //             </Badge>
        //         </ListItemAvatar>
        //         <ListItemText
        //             primary="{user.profile.name.fullName}"
        //             secondary={
        //                 <Typography
        //                     sx={{
        //                         // whiteSpace: 'nowrap',
        //                         overflow: 'hidden',
        //                         textOverflow: 'ellipsis',
        //                         //  height: "20px",
        //                         width: "200px",
        //                         // component="span"
        //                     }}
        //                 >
        //                     Long massage Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        //                 </Typography>
        //             }
        //         />
        //     </ListItem>
        //     <Divider variant="inset" component="li" />
        // </>
    )
}
