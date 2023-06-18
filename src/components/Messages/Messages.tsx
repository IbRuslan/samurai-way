import React from 'react';
import s from './messages.module.css'
import { Message } from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagesType, MessagesUsers} from "../../state/state";

type MessageType = {
    messagesUsers: MessagesUsers[]
    messagesData: MessagesType[]
}

export const Messages: React.FC<MessageType> = ({messagesUsers, messagesData}) => {


    let dialogsElements = messagesUsers
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
