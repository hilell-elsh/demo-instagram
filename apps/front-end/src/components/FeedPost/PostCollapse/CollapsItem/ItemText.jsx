import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from '@mui/material/colors';

import { useState } from 'react'


export default function ItemText() {

    const [isLiked, setIsLiked] = useState(false)
    const [likesAmount, setLikesAmount] = useState(0)  

    function likeComment(){

    }
    return (
        <ListItemText
            primary="Avi Moshe"
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        September 17, 2021
                    </Typography>
                    {"I'll be in your neighborhood doing errands this…"}

                    <Chip
                        onClick={() => {
                            likeComment();
                            if (isLiked) {
                                setLikesAmount(likesAmount - 1);
                            } else {
                                setLikesAmount(likesAmount + 1);
                            }
                            setIsLiked(!isLiked);
                        }}
                        icon={
                            <Tooltip title="Like">
                                <IconButton aria-label="like">
                                    {isLiked ? (
                                        <FavoriteIcon
                                            sx={{ color: red[500] }}
                                        />
                                    ) : (
                                        <FavoriteIcon />
                                    )}
                                </IconButton>
                            </Tooltip>
                        }
                        label={likesAmount + " Likes"}
                        variant="outlined"
                    />
                </React.Fragment>
            }
        />
    );
}
