import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { ModalContentItem, RemoveButton, ExitButton } from '../global/ModalStyle'

export default function FollowerModalContentItem({username, index}) {
    const [isButton, setIsButton] = useState(false)
    
    return(
        <ModalContentItem key={index}>
            <Avatar src={username.image.src} sx={{ width: 40, height: 40 }}/>
            <Link to={`/${username.username}/profile`}>
                {username.username}
            </Link>
            <p>{username.name.firstName + " " + username.name.lastName}</p>
            <RemoveButton className="fas fa-trash" onClick={() => setIsButton(true)}></RemoveButton>
            { isButton && <ExitButton className="fas fa-times" onClick={() => setIsButton(false)} style={{opacity: .6}}></ExitButton> }
        </ModalContentItem>      
    )
}