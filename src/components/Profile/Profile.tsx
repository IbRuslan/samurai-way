import React from "react";
import s from './profile.module.css';
import {AboutMe} from "./AboutMe/AboutMe";
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.profile}>
            <AboutMe/>
            <MyPosts/>
        </div>
    )
}