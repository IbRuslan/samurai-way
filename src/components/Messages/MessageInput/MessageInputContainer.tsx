import React from 'react';
import {MessageInput} from "./MessageInput";
import {addMessageActionCreator, updateNewMessagesActionText} from "../../../redux/messages-reducer";
import StoreContext from "../../../StoreContext";

export const MessageInputContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const newMessagesText = store.getState().messagesPage.newMessagesText
                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                const updateNewMessagesText = (text: string) => {
                    store.dispatch(updateNewMessagesActionText(text))
                }

                return <MessageInput newMessagesText={newMessagesText}
                                     addMessage={addMessage}
                                     updateNewMessagesText={updateNewMessagesText}/>
            }}
        </StoreContext.Consumer>
    );
};
