import React from 'react';
import s from './messages.module.css'
import {Message} from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagesPageType} from "../../redux/messages-reducer";
import {Redirect} from "react-router-dom";
import {MessageFormValues, SuperTextarea} from "../SuperComponents/FormComponents/SuperTextarea";
import {reduxForm} from "redux-form";

type MessageType = {
    messages: MessagesPageType
    addMessage: (newMessageBody: string) => void
    isAuth: boolean
}

export const Messages: React.FC<MessageType> = ({messages, ...props}) => {


    const dialogsUsers = messages.messagesUsers
        .map(d => <MessageItem key={d.id} name={d.name} id={d.id}/>)

    const onSendButtonHandler = (values: MessageFormValues) => {
        if (values.newMessageBody.trim() !== '') {
            props.addMessage(values.newMessageBody)
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
                <ReduxMessageForm onSubmit={onSendButtonHandler} />
            </div>
        </div>
    );
};


export const ReduxMessageForm = reduxForm<MessageFormValues, {}>({ form: 'messageText' })(SuperTextarea);