import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import {useState, useEffect} from 'react'

import CollapseItem from './PostCollapse/CollapseItem'
import CollapseItem2 from './PostCollapse/CollapseItem2'
import CollapseItem3 from './PostCollapse/CollapseItem3'

import {getPostComments} from '../../services/comment-data'


export default function PostCollapse({ expanded, contentItem }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
         (async () => {
            setComments(await getPostComments(contentItem._id))
        })()
    }, [])

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
