import { useEffect, useState } from "react";
import Feed from "../../components/FeedPost";
import {getFeed} from "../../services/feed-data"


export default function PageFeed() {
    const [feed, setFeed] = useState()
    useEffect(() => {
        void (async () => {
            setFeed(await getFeed())
        })();
    }, [])
    console.log("feed")
    console.log(feed)
    if (feed === undefined) {
        return null;
    }
    
    return (
        <>
            <h5>FEED</h5>
            <div>
                {feed.map( contentItem => {return <Feed contentItem={contentItem} />})}
            </div>
        </>
    )
}
