import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Feed from '../../components/FeedPost'
import LoadingAnimation from '../../components/global/LoadingAnimation'
import { getFeed } from '../../services/feed-data'

export default function PageFeed() {
    const [feed, setFeed] = useState([])
    useEffect(() => {
        void (async () => {
            setFeed(await getFeed())
        })()
    }, [])
  
    if (feed === undefined) {
        return null
    }
    if (feed.length === 0) {
        // empty feed
        return (
            <LoadingAnimation />
        )
    }

    return (
        <>
            <div style={{ width: '70vw', margin: '0 auto' }}>
                {feed.map((contentItem) => {
                    return <Feed contentItem={contentItem} />
                })}
            </div>
        </>
    )
}
