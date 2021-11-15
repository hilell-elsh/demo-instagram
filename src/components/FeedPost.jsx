import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { red , green ,blue , orange } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Chip from '@mui/material/Chip';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Feed() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <Card sx={{ maxWidth: 1080 , marginTop: 1}} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    Y
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Yossi Cohen"
                subheader="September 14, 2021"
            />
            <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                Yossi Cohen
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like. This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. 
                </Typography>
                <Chip sx={{ bgcolor: green[200] }} icon={<FilterHdrIcon />} label="Nature" />
            </CardContent>
            <CardActions disableSpacing>
                <Chip icon={
                    <Tooltip title="Like">
                        <IconButton aria-label="like">
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                } label="1,549 Likes" variant="outlined" />
                <Tooltip title="Share">
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add Comment">
                    <IconButton aria-label="add comment">
                        <AddCommentIcon />
                    </IconButton>
                </Tooltip>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[500] }} alt="Avi Moshe" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Avi Moshe"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'block' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        September 17, 2021
                                        </Typography>
                                        {"I'll be in your neighborhood doing errands this…"}
                
                                        <Chip icon={
                                            <Tooltip title="Like">
                                                <IconButton aria-label="like">
                                                    <FavoriteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        } label="579 Likes" variant="outlined" />
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: orange[500] }} alt="Israel Israeli" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Israel Israeli"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'block' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        September 15, 2021
                                        </Typography>
                                        {"Wish I could come, but I'm out of town this…"}
                                        <Chip icon={
                                            <Tooltip title="Like">
                                                <IconButton aria-label="like">
                                                    <FavoriteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        } label="134 Likes" variant="outlined" />
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: green[500] }} alt="Dana Nama" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Dana Nama"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'block' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                    September 14, 2021
                                    </Typography>
                                    {'Do you have Paris recommendations?'}
                                    <Chip icon={
                                        <Tooltip title="Like">
                                            <IconButton aria-label="like">
                                                <FavoriteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    } label="149 Likes" variant="outlined" />
                                </React.Fragment>
                            }
                        />
                        </ListItem>
                    </List>
                </CardContent>
            </Collapse>
        </Card>
        )
}