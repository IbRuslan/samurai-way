import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string
}

export function Header (props: HeaderType) {
    return (
        <header className={s.header}>
            <img src='https://st3.depositphotos.com/16030310/18317/v/450/depositphotos_183176356-stock-illustration-lm-letters-logo-initial-logo.jpg' alt=''/>
            <div className={s.title}>LiteMessages</div>
            <div className={s.login}>
                {props.isAuth
                    ? <span>{props.login}</span>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

