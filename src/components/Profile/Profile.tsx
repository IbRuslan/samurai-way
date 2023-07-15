import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {ActionType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfileType> = ({dispatch, profilePage}) => {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPostsContainer posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    )
}