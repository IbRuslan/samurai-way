import React from 'react';
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessagesActionText} from "../../redux/messages-reducer";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {Messages} from "./Messages";

const mapStateToProps = (state: RootStateType) => {
    return {
        messagesPage: state.messagesPage,
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
export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
