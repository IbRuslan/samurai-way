import React from 'react'
import s from './Post.module.css'
import imgAva from "../../../../img/avatar/ava.jpg";

type PostType = {
    messages: string
    likesCount: number
}

export const Post: React.FC<PostType> = ({messages, likesCount})=>{
    return (
        <div className={s.post_container}>
            <div className={s.avatar}>
                <img src={imgAva} alt=''/>
            </div>
            <div className={s.message}>{messages} <span>{likesCount}</span>  </div>
        </div>
    )
}