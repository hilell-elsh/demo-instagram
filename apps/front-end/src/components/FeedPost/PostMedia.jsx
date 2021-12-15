import CardMedia from '@mui/material/CardMedia';
import styled from "styled-components"

const Slideshow = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
`;

const Slide = styled.div`
    display: none;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
`;




export default function PostMedia() {
    return (
        <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Paella dish"
        />
    )
}