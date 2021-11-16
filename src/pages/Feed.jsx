import { borderRadius } from "@mui/system";
import Feed from "../components/FeedPost";
import Feed2 from "../components/FeedPost2";
import MessengerList from "../components/MessengerList";

export default function PageFeed() {
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'30%', margin: "5px" }} >
                <MessengerList />
            </div>
            <div  style={{width:'70%'}}  >
                <Feed/>
                <Feed2 />
            </div>
        </div>
            
    )
}