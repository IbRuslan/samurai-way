import React from "react";
import s from './profile.module.css';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {profileShowUserTC, ProfileType} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


interface MatchParams {
    userId: string;
}
export type ProfileContainerProps = {
    profileShowUserTC: (userId: string) => any
    profile: ProfileType
    userId: string
}

class ProfileContainer extends React.Component<RouteComponentProps<MatchParams> & ProfileContainerProps>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) { userId = "29611" }
        this.props.profileShowUserTC(userId)
    }
    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profile.profile
    }
}


// @ts-ignore
const withUrlDataContainerComponent = withRouter(ProfileContainer)

// @ts-ignore
export const ProfileContainerConnect: FC =  connect(mapStateToProps, {profileShowUserTC})(withUrlDataContainerComponent)