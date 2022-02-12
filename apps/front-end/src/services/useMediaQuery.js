import { useState, useEffect } from 'react'

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
    }, [matches])

    return matches
}

export const useIsSmall = () => useMediaQuery('(min-width: 850px)')
