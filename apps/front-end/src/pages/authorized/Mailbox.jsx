import MessengerList from '../../components/MessengerList'
import MessengerChat from '../../components/MessengerChat'
import { getAllMessages } from '../../services/massage-data'
export default function Mailbox() {
    const messages = getAllMessages()
    console.log(messages)
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', margin: '5px' }}>
                <MessengerList massages={messages} />
            </div>
            <div style={{ width: '50%' }}>
                <MessengerChat />
            </div>
        </div>
    )
}
