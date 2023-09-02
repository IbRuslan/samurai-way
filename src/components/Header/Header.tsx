import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../img/header/logo.jpg'
import logout from './../../img/header/logout.svg'

type HeaderType = {
    isAuth: boolean
    login: string
    setLogoutTC: () => void
}

export function Header(props: HeaderType) {

    return (
        <header className={s.header}>
            <img className={s.logo}
                src={logo}
                alt=''/>
            <div className={s.title}>LiteMessages</div>
            <div className={s.login}>
                {props.isAuth
                    ? <div className={s.log}>
                        <span>{props.login}</span>
                        <img className={s.logout} src={logout} onClick={props.setLogoutTC}/>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
