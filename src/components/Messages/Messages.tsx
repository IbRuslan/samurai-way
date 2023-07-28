import React, {ChangeEvent} from 'react';
import s from './messages.module.css'
import {Message} from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagesPageType} from "../../redux/messages-reducer";
import {Button} from "../SuperButton/Button";

type MessageType = {
    messagesPage: MessagesPageType
    newMessagesText: string
    addMessage: () => void
    updateNewMessagesText: (text: string) => void
}

export const Messages: React.FC<MessageType> = ({messagesPage, newMessagesText, ...props}) => {


    const dialogsUsers = messagesPage.messagesUsers
        .map(d => <MessageItem key={d.id} name={d.name} id={d.id}/>)

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const messages = e.currentTarget.value
        props.updateNewMessagesText(messages)
    }
    const onSendButtonHandler = () => {
        if (newMessagesText.trim() !== '') {
            props.addMessage()
        }
    }

    return (
        <div className={s.messages_container}>
            <div className={s.messages_users}>
                {dialogsUsers}
            </div>
            <div className={s.chat}>
                <Message />
                <div className={s.form}>
                   <textarea
                       placeholder={'Enter your messages'}
                       value={newMessagesText}
                       onChange={onChangeTextareaHandler}>
                   </textarea>
                    <Button name={'Send'} callback={onSendButtonHandler}/>
                </div>
            </div>
        </div>
    );
};
