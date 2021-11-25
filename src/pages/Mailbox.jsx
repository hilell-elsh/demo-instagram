import MessengerList from "../components/MessengerList"
import MessengerChat from "../components/MessengerChat"

export default function Mailbox() {
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'30%', margin: "5px" }} >
                <MessengerList />
            </div>
            <div  style={{width:'70%'}}   >
            <MessengerChat />
            </div>
                
        </div>
    )
}