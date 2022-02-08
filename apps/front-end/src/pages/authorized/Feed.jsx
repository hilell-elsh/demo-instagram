import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Feed from '../../components/FeedPost'
import { getFeed } from '../../services/feed-data'

export default function PageFeed() {
    const [feed, setFeed] = useState([])
    useEffect(() => {
        void (async () => {
            setFeed(await getFeed())
        })()
    }, [])
    console.log('feed')
    console.log(feed)

    // I don`t think this if will come to using
    if (feed === undefined) {
        return null
    }
    if (feed.length === 0) {
        // empty feed
        return (
            <img
                src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/media/1df2396f1eaa146bcb7dd3e73c1dc77b.gif"
                style={{ margin: '0 auto', display: 'block' }}
            />
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
