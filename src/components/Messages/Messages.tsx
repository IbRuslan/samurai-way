import React from 'react';
import s from './messages.module.css'
import {NavLink} from "react-router-dom";
import { Message } from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";


// type MessagesType = {
//     id: number
//     name: string
// }
//
// const MessageItem: React.FC<MessagesType> = ({id, name}) => {
//     return (
//         <div>
//             <NavLink to={"/messages/" + id}>{name}</NavLink>
//         </div>
//     )
// }
//
// type MessageType = {
//     message: string
// }
//
// const Message: React.FC<MessageType> = ({message}) => {
//     return (
//         <div className={s.dialog}>{message}</div>
//     )
// }

export const Messages = () => {

    let dialogsData = [
        {id: 1, name: 'Ruslan'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Sherzod'},
        {id: 4, name: 'Milana'},
        {id: 5, name: 'Miraziz'}
    ]

    let messagesData = [
        {id: 1, message: 'He'},
        {id: 2, message: 'How are yo'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogsData
        .map(d => <MessageItem name={d.name} id={d.id}/>)

    let messagesElements = messagesData
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.messages}>
            <div className={s.messages_users} >
                {dialogsElements}
            </div>
            <div className={s.messages_dialogs}>
                {messagesElements}
            </div>
        </div>
    );
};
