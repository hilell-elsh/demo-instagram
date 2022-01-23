import { messages } from '../ex-apis/messages.js'

export function getAllMessages() {
    return messages
    // fetch('../ex-apis/messages.json')
    // .then((response) => response.json())
}
