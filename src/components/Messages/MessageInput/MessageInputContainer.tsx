import React from 'react';
import {ActionType} from "../../../redux/store";
import {MessageInput} from "./MessageInput";
import {addMessageActionCreator, updateNewMessagesActionText} from "../../../redux/messages-reducer";

type MessageInputContainerType = {
    newMessagesText: string
    dispatch: (action: ActionType) => void
}

export const MessageInputContainer: React.FC<MessageInputContainerType> = ({newMessagesText, dispatch}) => {

    const addMessage = () => {
        dispatch(addMessageActionCreator())
    }
    const updateNewMessagesText = (text: string) => {
        dispatch(updateNewMessagesActionText(text))
    }

    return (
        <MessageInput newMessagesText={newMessagesText}
                      addMessage={addMessage}
                      updateNewMessagesText={updateNewMessagesText}/>
    );
};