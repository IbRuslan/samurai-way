import React from "react";
import s from './profile.module.css';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface MatchParams {
    userId: string;
}

export type ProfileContainerProps = {
    setUserProfileAC: (profile: ProfileType) => void
    profile: ProfileType
    userId: string
}

class ProfileContainer extends React.Component<RouteComponentProps<MatchParams> & ProfileContainerProps>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) { userId = "29611" }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
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
export const ProfileContainerConnect: FC =  connect(mapStateToProps, {setUserProfileAC})(withUrlDataContainerComponent)