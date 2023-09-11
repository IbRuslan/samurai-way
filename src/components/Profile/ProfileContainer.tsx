import React, {FC} from "react";
import s from './profile.module.css';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    profileUpdateUserStatusTC,
    profileGetUserStatusTC,
    profileShowUserTC,
    ProfileType, savePhotoTC
} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


interface MatchParams {
    userId: string;
}
export type ProfileContainerProps = {
    profileShowUserTC: (userId: string) => void
    profile: ProfileType
    isAuth: boolean
    myId: string
    profileGetUserStatusTC: (userId: string) => void
    profileUpdateUserStatusTC: (status: string) =>  void
    savePhotoTC: (file: FileList) => void
    status: string
}

class ProfileContainer extends React.Component<RouteComponentProps<MatchParams> & ProfileContainerProps>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId && this.props.isAuth) {
            userId = this.props.myId
        }
        if (!this.props.isAuth) return <Redirect to={'login'}/>
        this.props.profileShowUserTC(userId)
        this.props.profileGetUserStatusTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'login'}/>
        return (
            <div className={s.profile}>
                <Profile savePhoto={this.props.savePhotoTC} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.profileUpdateUserStatusTC} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profile.profile,
        isAuth: state.auth.isAuth,
        myId: state.auth.userId,
        status: state.profile.status
    }
}

// @ts-ignore
export const ProfileContainerConnect:FC = compose(
    connect(mapStateToProps, {profileShowUserTC, profileGetUserStatusTC, profileUpdateUserStatusTC, savePhotoTC}),
    withRouter
)(ProfileContainer)
