import React, {ChangeEvent} from 'react'
import s from './aboutme.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../SuperComponents/Preloader/Preloader";
import userPhoto from "../../../img/avatar/userPhoto.png"
import {StatusAboutMe} from "./StatusAboutMe";

type AboutMeProps = {
    profile: ProfileType
    status: string
    updateStatus: (newStatus: string) => any
    isOwner: boolean
    savePhoto: (files: FileList) => void;
}

export const AboutMe = (props: AboutMeProps) => {

    if(!props.profile) {
        return <Preloader/>
    }

    const onChangeProfilePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && props.savePhoto(e.target.files)
    }

    return (
        <div className={s.aboutme}>
            <div className={s.foto}>
                <img className={s.ava} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt=''/>
                {props.isOwner && <input type="file" onChange={onChangeProfilePhotoHandler}/>}
            </div>
            <div className={s.about}>
                <div className={s.myname}>{props.profile && props.profile.fullName}</div>
                <div className={s.character}>
                    <StatusAboutMe status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}