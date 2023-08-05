import React from "react";
import s from './profile.module.css';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";

export interface ProfileContainerProps {
    setUserProfileAC: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerProps>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
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
        profile: state.profilePage.profile
    }
}

// @ts-ignore
export const ProfileContainerConnect: FC =  connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)