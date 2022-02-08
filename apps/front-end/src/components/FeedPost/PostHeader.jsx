import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red, green, lightBlue, orange } from '@mui/material/colors'
import { Link } from 'react-router-dom'

export default function PostHeader({ contentItem }) {
    const date = new Date(contentItem.createdDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    function getMonthName(number) {
        switch (number) {
            case 1:
                return 'January'
                break
            case 2:
                return 'February'
                break
            case 3:
                return 'March'
                break
            case 4:
                return 'April'
                break
            case 5:
                return 'May'
                break
            case 6:
                return 'June'
                break
            case 7:
                return 'July'
                break
            case 8:
                return 'August'
                break
            case 9:
                return 'September'
                break
            case 10:
                return 'October'
                break
            case 11:
                return 'November'
                break
            case 12:
                return 'December'
        }
    }
    const monthName = getMonthName(month)

    const displayDate = `${day} ${monthName} ${year}`
    return (
        <CardHeader
            avatar={
                <Avatar
                    src={contentItem.author.userBasicData.profileImageSrc}
                    sx={{ bgcolor: lightBlue }}
                    aria-label="recipe"
                >
                    {contentItem.author.userBasicData.username
                        .charAt(0)
                        .toUpperCase()}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={<Link to={`/${contentItem.author.userBasicData.username}`}>{contentItem.author.userBasicData.username}</Link>}
            subheader={displayDate}
        />
    )
}
