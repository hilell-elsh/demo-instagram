import * as React from 'react'

import MessengerItem from './MessengerItem'

export default function MessengerList({ massages, numOf = 0 }) {
   
    return (
        <nav>
            {massages.map((massage) => {
                return (
                    <MessengerItem key={massage.senderId} chatData={massage} />
                )
            })}
        </nav>
      
    )
}
