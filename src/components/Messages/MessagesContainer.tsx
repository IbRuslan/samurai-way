import React from 'react';
import {connect} from "react-redux";
import {addMessageActionCreator} from "../../redux/messages-reducer";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {Messages} from "./Messages";
import { Dispatch } from 'redux'

const mapStateToProps = (state: RootStateType) => {
    return {
        messages: state.messages,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {

    return {
        addMessage: (newMessageBody: string) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}
export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
