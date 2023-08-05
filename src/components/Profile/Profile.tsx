import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileType
}

export const Profile = (props: ProfileProps) => {
    return (
        <div className={s.profile}>
            <AboutMe profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}