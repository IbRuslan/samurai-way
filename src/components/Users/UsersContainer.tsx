import React, {FC} from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followTC, getUsersTC, unFollowTC, UsersType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../SuperComponents/Preloader/Preloader";

export interface UsersApiProps {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    InProgress: number[]
    getUsersTC: (currentPage: number, pageSize: number) =>  void
    unFollowTC: (id: number) => void
    followTC: (id: number) =>  void
}

class UsersApi extends React.Component<UsersApiProps> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalCounts(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
    }
    currentPageChanged = (p: number) => {
        this.props.getUsersTC(p, this.props.pageSize)
        // this.props.setCurrentPage(p)
        // this.props.toggleIsFetching(true)
        // getUsers(p, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.toggleIsFetching(false)
        //     })
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
                             follow={this.props.followTC}
                             unFollow={this.props.unFollowTC}
                             isFetching={this.props.isFetching}
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

// @ts-ignore
export const UsersContainer: FC = connect(mapStateToProps, {getUsersTC, followTC, unFollowTC})(UsersApi)