import React from 'react'
import s from './aboutme.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../SuperComponents/Preloader/Preloader";

type AboutMeProps = {
    profile: ProfileType
}

export const AboutMe = (props: AboutMeProps) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.aboutme}>
            <div className={s.foto}>
                <img className={s.ava} src={props.profile.photos.large} alt=''/>
            </div>
            <div className={s.about}>
                <div className={s.myname}>{props.profile && props.profile.fullName}</div>
                <div className={s.character}>
                </div>
            </div>
        </div>
    )
}