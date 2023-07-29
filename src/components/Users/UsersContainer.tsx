import React, {FC} from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {UsersC} from "./UsersC";


const mapStateToProps = (state: RootStateType) => {

    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

// @ts-ignore
export const UsersContainer:FC = connect(mapStateToProps, mapDispatchToProps)(UsersC)