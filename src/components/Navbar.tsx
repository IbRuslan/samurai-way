import React from 'react'
import imgProfile from '../img/profile.svg'
import imgMessages from '../img/messages.svg'
import imgMusic from '../img/music.svg'
import imgNews from '../img/news.svg'
import imgSettings from '../img/settings.svg'
import s from './navbar.module.css'

export const Navbar = () =>{

    return (
        <nav className={s.navbar}>
            <div className={s.content}>
                <img src={imgProfile} alt=''/>
                <a className={s.title}>Profile</a>
            </div>
            <div className={s.content}>
                <img src={imgMessages} alt='' />
                <a className={s.title}>Messages</a>
            </div>
            <div className={s.content}>
                <img src={imgMusic} alt='' />
                <a className={s.title}>Music</a>
                </div>
            <div className={s.content}>
                <img src={imgNews} alt='' />
                <a className={s.title}>News</a>
            </div>
            <div className={s.content}>
                <img src={imgSettings} alt='' />
                <a className={s.title}>Settings</a>
            </div>
        </nav>
    )
}