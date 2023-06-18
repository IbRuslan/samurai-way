import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../state/state";

type ProfileType = {
    posts: PostsType[]
}

export const Profile: React.FC<ProfileType> = ({posts}) => {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPosts posts={posts}/>
        </div>
    )
}