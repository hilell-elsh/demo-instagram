import CardMedia from '@mui/material/CardMedia';
import {styled, keyframes } from "styled-components"

const Slideshow = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
`;

const Slide = styled.div`
    display: none;
    -webkit-animation-name: ${fade};
    -webkit-animation-duration: 1.5s;
    animation-name: ${fade};
    animation-duration: 1.5s;
`;

const fade = keyframes`
    from {opacity: .4} 
    to {opacity: 1}
`;

const Button = styled.a`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

const RightButton = styled(Button)`
    right: 0;
    border-radius: 3px 0 0 3px;
`;

const LeftButton = styled(Button)`

`;

const Dot = styled.span`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &:hover {
        background-color: #717171;
    }
`;




export default function PostMedia() {

    

    return (
        <Slideshow>
            <Slide>
                <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Paella dish"
                />
            </Slide>
        </Slideshow>
        
    )
}