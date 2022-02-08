import styled from 'styled-components'

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin: auto;
`

export const Info = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`

export const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #dbdbdb;
`

export const Links = styled.div`
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
    padding: 6px;
    font-weight: 600;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    cursor: pointer;
`

export const Count = styled.p`
    font-weight: 500;

    & span {
        cursor: pointer;
        font-weight: 400;
    }
`
