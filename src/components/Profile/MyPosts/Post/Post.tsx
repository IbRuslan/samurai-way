import React from 'react'
import s from './Post.module.css'

type PostType = {
    messages: string
    likesCount: number
}

export const Post: React.FC<PostType> = ({messages, likesCount})=>{
    return (
        <div>
            <div>
                <img />
            </div>
            <div>{messages} <span>{likesCount}</span>  </div>
        </div>
    )
}