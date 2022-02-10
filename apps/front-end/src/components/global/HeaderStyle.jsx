import styled from 'styled-components'
import { Logo } from '../form/FormStyle'

export const HeaderWrapper = styled.div`
    position: sticky;
    inset: 0 0 auto 0;
    height: 7vh;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #fafafa;
    z-index: 2;
`

export const HeaderLogo = styled(Logo)`
    flex: 1;
    font-size: 36px;
`

export const HeaderSearch = styled.input`
    flex: 1;
    width: 20vw;
    height: 2rem;
    padding: 0.5rem;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
`

export const HeaderNav = styled.ul`
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 5rem;
`

export const HeaderButton = styled.li`
    list-style: none;
    cursor: pointer;

    & :hover {
        color: #bbb;
    }

    & i {
        font-size: 28px;
    }

    & .fa-facebook-messenger:hover {
        color: #7cc3ff;
    }

    & .fa-heart:hover {
        color: #ffb0b0;
    }

    & .fa-compass:hover {
        color: #b6ffd0;
    }

    & .fa-sign-out-alt:hover {
        color: #ff0000;
    }
`
