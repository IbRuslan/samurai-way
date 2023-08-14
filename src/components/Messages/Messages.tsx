import React, {ChangeEvent} from 'react';
import s from './messages.module.css'
import {Message} from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagesPageType} from "../../redux/messages-reducer";
import {Button} from "../SuperComponents/SuperButton/Button";
import {Redirect} from "react-router-dom";

type MessageType = {
    messages: MessagesPageType
    newMessagesText: string
    addMessage: () => void
    updateNewMessagesText: (text: string) => void
    isAuth: boolean
}

export const Messages: React.FC<MessageType> = ({messages, newMessagesText, ...props}) => {


    const dialogsUsers = messages.messagesUsers
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

    if (!props.isAuth) return <Redirect to={'login'}/>

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
