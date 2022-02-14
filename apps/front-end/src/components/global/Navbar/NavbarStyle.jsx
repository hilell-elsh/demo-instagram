import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Logo } from '../../form/FormStyle'

export const NavbarWrapper = styled(motion.div)`
    position: sticky;
    inset: 0;
    min-width: 370px;
    height: 7vh;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 1rem;
    background-color: #fafafa;
    z-index: 2;
`

export const NavbarLogo = styled(Logo)`
    flex: 1;
    font-size: 36px;
    @media (max-width: 850px) {
        position: relative;
        flex: inherit;
    }
`

export const HeaderSearch = styled(motion.input)`
    flex: 1;
    width: 20vw;
    height: 2rem;
    padding: 0.5rem;
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    @media (max-width: 850px) {
        display: none;
        /* flex: none; */
    }
`

export const NavbarLinks = styled(motion.ul)`
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`

export const NavbarButton = styled.li`
    list-style: none;
    cursor: pointer;

    & :hover {
        color: #bbb;
    }

    & i {
        font-size: 28px;
    }

    & .fa-heart:hover {
        color: #ffb0b0;
    }

    & .fa-arrow-right-from-bracket:hover {
        color: #ff0000;
    }
`

export const Popup = {
    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '-100vh',
        opacity: 0,
    },
}
