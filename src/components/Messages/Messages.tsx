import React from 'react';
import s from './messages.module.css'
import { Message } from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {MessageInputContainer} from "./MessageInput/MessageInputContainer";
import {MessagesPageType} from "../../redux/messages-reducer";

type MessageType = {
    messagesPage: MessagesPageType
}

export const Messages: React.FC<MessageType> = ({messagesPage}) => {


    const dialogsUsers = messagesPage.messagesUsers
        .map(d => <MessageItem key={d.id} name={d.name} id={d.id}/>)

    const dialogsMessages = messagesPage.messagesData
        .map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.messages}>
            <div className={s.messages_users} >
                {dialogsUsers}
            </div>
            <div className={s.messages_dialogs}>
                <div>
                    {dialogsMessages}
                </div>
                <MessageInputContainer/>
            </div>
        </div>
    );
};
