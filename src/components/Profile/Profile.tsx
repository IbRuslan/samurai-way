import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPosts} from "./MyPosts/MyPosts";
import {Posts} from "../../index";

type ProfileType = {
    posts:Posts[]
}

export const Profile: React.FC<ProfileType> = ({posts}) => {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPosts posts={posts}/>
        </div>
    )
}