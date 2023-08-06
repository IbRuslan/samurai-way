import React, {FC} from 'react';
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {
    followAC, followingInProgressAC,
    setCurrentPageAC,
    setTotalCountsAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../SuperComponents/Preloader/Preloader";
import {getUsers} from "../../api/api";

export interface UsersApiProps {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    InProgress: number[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCounts: (counts: number) => void
    toggleIsFetching: (fetching: boolean) => void
    followingInProgress: (progress: boolean, userId: number) => void
}

class UsersApi extends React.Component<UsersApiProps> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCounts(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }
    currentPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }
    render() {
        return (<>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users users={this.props.users}
                             currentPageChanged={this.currentPageChanged}
                             totalCount={this.props.totalCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             follow={this.props.follow}
                             unFollow={this.props.unFollow}
                             isFetching={this.props.isFetching}
                             followingInProgress={this.props.followingInProgress}
                             InProgress={this.props.InProgress}
                    />}
            </>
        );
    }
}

const mapStateToProps = (state: RootStateType) => {

    return {
        users: state.users.items,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        InProgress: state.users.followingInProgress
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
        setTotalCounts: (counts: number) => {
            dispatch(setTotalCountsAC(counts))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        toggleIsFetching: (fetching: boolean) => {
            dispatch(toggleIsFetchingAC(fetching))
        },
        followingInProgress: (progress: boolean, userId: number) => {
            dispatch(followingInProgressAC(progress, userId))
        }
    }
}

// @ts-ignore
export const UsersContainer: FC = connect(mapStateToProps, mapDispatchToProps)(UsersApi)