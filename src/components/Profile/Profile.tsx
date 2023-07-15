import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPostsContainer/>
        </div>
    )
}