import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../state/state";

type ProfileType = {
    posts: Array<PostsType>
    addPost: (post: string) => void
}

export const Profile: React.FC<ProfileType> = ({posts, addPost}) => {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}