import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";

const mapStateToProps = (state: RootStateType) => {

    return {
        users: state.usersPage.items
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {

    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)