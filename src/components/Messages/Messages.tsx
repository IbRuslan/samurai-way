import React, {ChangeEvent} from 'react';
import s from './messages.module.css'
import { Message } from './Message/Message';
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionType, MessagesPageType} from "../../state/state";
import {Button} from "../SuperButton/Button";
import {addMessageActionCreator, updateNewMessagesActionText} from "../../state/messages-reducer";

type MessageType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionType) => void
}

export const Messages: React.FC<MessageType> = ({messagesPage, dispatch}) => {


    const dialogsUsers = messagesPage.messagesUsers
        .map(d => <MessageItem key={d.id} name={d.name} id={d.id}/>)

    const dialogsMessages = messagesPage.messagesData
        .map(m => <Message key={m.id} message={m.message}/>)

    const newMessagesText = messagesPage.newMessagesText

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const messages = e.currentTarget.value
        dispatch(updateNewMessagesActionText(messages))
    }
    const onSendButtonHandler = () => {
        dispatch(addMessageActionCreator())
    }

    return (
        <div className={s.messages}>
            <div className={s.messages_users} >
                {dialogsUsers}
            </div>
            <div className={s.messages_dialogs}>
                <div>
                    {dialogsMessages}
                </div>
                <div>
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
