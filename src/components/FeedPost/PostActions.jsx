import * as React from 'react';
import { styled } from '@mui/material/styles';

import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ActionLike from './PostActions/ActionLike';
import ActionShare from './PostActions/ActionShare';
import ActionAddComment from './PostActions/ActionAddComment'
import ActionEpandMore from './PostActions/ActionEpandMore';



import { red , green ,blue , orange } from '@mui/material/colors';

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

export default function PostActions( {expanded , setExpanded} ) {



    return (
        <CardActions disableSpacing>
                <ActionLike />
                <ActionShare />
                <ActionAddComment />
                <ActionEpandMore expanded= {expanded} setExpanded= {setExpanded}  />
                
            </CardActions>
    )
}