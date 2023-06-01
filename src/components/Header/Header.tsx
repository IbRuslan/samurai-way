import React from "react";
import s from './header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <img src='https://st3.depositphotos.com/16030310/18317/v/450/depositphotos_183176356-stock-illustration-lm-letters-logo-initial-logo.jpg'/>
            <div className={s.title}>LiteMessages</div>
        </header>
    )
}

