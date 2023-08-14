import React from 'react';
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessagesActionText} from "../../redux/messages-reducer";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {Messages} from "./Messages";
import { Dispatch } from 'redux'

const mapStateToProps = (state: RootStateType) => {
    return {
        messages: state.messages,
        newMessagesText: state.messages.newMessagesText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {

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
