import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../state/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPost: (newText: string) => void
}

export const Profile: React.FC<ProfileType> = ({updateNewPost, profilePage, addPost}) => {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     addPost={addPost}
                     updateNewPost={updateNewPost}
            />
        </div>
    )
}