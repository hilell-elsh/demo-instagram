import styled from "styled-components"

export const ProfileWrapper = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InfoWrapper = styled.div`
    width: inherit;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`

export const PostsWrapper = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #afafaf;
`

export const LinksWrapper = styled.div`
    width: 20vw;
    display: flex;
    justify-content: space-around;

    & a {
        padding: 10px;
        border-top: 1px solid transparent;
        color: black;
    }
`

export const Posts = styled.div`
    width: inherit;
`

export const Username = styled.h1`
    font-weight: 300;
`

export const Button = styled.button`
    padding: 7px;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    cursor: pointer;
`

export const Count = styled.p`
    font-weight: 500;
    
    & span {
        font-weight: 400;
    }
`