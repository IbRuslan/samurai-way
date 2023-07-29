import React from 'react'
import imgProfile from '../img/nav/profile.svg'
import imgMessages from '../img/nav/messages.svg'
import imgMusic from '../img/nav/music.svg'
import imgUsers from '../img/nav/users.svg'
import imgSettings from '../img/nav/settings.svg'
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className={s.navbar}>
            <div className={s.content}>
                <img src={imgProfile} alt=''/>
                <NavLink className={s.title} activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div className={s.content}>
                <img src={imgMessages} alt=''/>
                <NavLink className={s.title} activeClassName={s.active} to="/messages">Messages</NavLink>
            </div>
            <div className={s.content}>
                <img src={imgUsers} alt=''/>
                <NavLink className={s.title} activeClassName={s.active} to="/users">Users</NavLink>
            </div>
            <div className={s.content}>
                <img src={imgMusic} alt=''/>
                <NavLink className={s.title} activeClassName={s.active} to="/music">Music</NavLink>
            </div>
            <div className={s.content}>
                <img src={imgSettings} alt=''/>
                <NavLink className={s.title} activeClassName={s.active} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}