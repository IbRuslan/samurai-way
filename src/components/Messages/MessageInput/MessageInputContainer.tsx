import React from 'react';
import {MessageInput} from "./MessageInput";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessagesActionText} from "../../../redux/messages-reducer";
import {ActionType, RootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: RootStateType) => {
    return {
        newMessagesText: state.messagesPage.newMessagesText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewMessagesText: (text: string) => {
            dispatch(updateNewMessagesActionText(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);
