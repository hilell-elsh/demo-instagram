import {motion} from 'framer-motion'
import styled from 'styled-components'

const loadingVariants = {
    leftToRight: {
        x: [-100, 100],
        type: 'spring',
        stiffness: 100,
        damping: 20,
        ease: 'easeOut',
        duration: 2
    }
}

const LoadingBar = styled(motion.div)`
    width: 100px;
    height: 20px;
    border-radius: 5px;
    background-color: #2e79eb;
    position: absolute;
    top: 50%;
    left: 50%;
`

export default function LoadingAnimation() {
    return (
        <LoadingBar variants={loadingVariants} animate='leftToRight'/>
    )   
}