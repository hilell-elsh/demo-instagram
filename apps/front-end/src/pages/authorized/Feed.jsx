import { useEffect, useState } from "react";
import Feed from "../../components/FeedPost";
import {getFeed} from "../../services/feed-data"


export default function PageFeed() {
    const [feed, setFeed] = useState([])
    useEffect(() => {
        void (async () => {
            setFeed(await getFeed())
        })();
    }, [])
    console.log("feed")
    console.log(feed)

    // I don`t think this if will come to using
    if (feed === undefined) {
        return null;
    }
    if (feed.length===0) { // empty feed
        return (
            <>
                <h5>YOU HAVE NO FRIENDS</h5>
            </>
        );
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
