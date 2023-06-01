import React from 'react'
import imgAva from '../../../img/avatar/ava.jpg'
import s from './aboutme.module.css'

export const AboutMe = ()=>{
    return (
        <div className={s.aboutme}>
            <div className={s.foto}>
                <img className={s.ava} src={imgAva} alt=''/>
            </div>
            <div className={s.about}>
                <div className={s.myname}>Ruslan Ibragimov</div>
                <div className={s.character}>
                    cv
                </div>
            </div>
        </div>
    )
}