import React, {ChangeEvent} from 'react';
import {Button} from "../../SuperButton/Button";

type MessageInputType = {
    newMessagesText: string
    addMessage: () => void
    updateNewMessagesText: (text: string) => void
}

export const MessageInput: React.FC<MessageInputType> = (
    {
        newMessagesText,
        updateNewMessagesText,
        addMessage
    }) => {

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const messages = e.currentTarget.value
        updateNewMessagesText(messages)
    }
    const onSendButtonHandler = () => {
        if (newMessagesText.trim() !== '') {
            addMessage()
        }
    }

    return (
        <div>
            <textarea
                placeholder={'Enter your messages'}
                value={newMessagesText}
                onChange={onChangeTextareaHandler}>
            </textarea>
            <Button name={'Send'} callback={onSendButtonHandler}/>
        </div>
    );
};