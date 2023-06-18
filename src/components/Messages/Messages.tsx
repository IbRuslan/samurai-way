import React from 'react';
import s from './messages.module.css'
import {NavLink} from "react-router-dom";
import { Message } from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsData, MessagesData} from "../../index";

type MessagesType = {
    dialogsData: DialogsData[]
    messagesData: MessagesData[]
}

export const Messages: React.FC<MessagesType> = ({dialogsData, messagesData}) => {


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
