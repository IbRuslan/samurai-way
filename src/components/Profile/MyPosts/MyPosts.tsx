import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {Button} from "../../SuperButton/Button";
import imgAva from "../../../img/avatar/ava.jpg";



export const MyPosts = ()=>{

    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Im happy', likesCount: 4},
        {id: 3, message: 'Its my first post', likesCount: 16}
    ]

    let postElements = postsData
        .map(p => <Post messages={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.container}>
            <div className={s.new_post_container}>
                <div className={s.avatar}>
                    <img src={imgAva} alt=''/>
                </div>
                <div className={s.addPost}>
                    <input type="Добавить пост"/>
                </div>
                <div className={s.button}>
                    <Button name={'Add'} callback={()=>{}}/>
                </div>
            </div>
            {postElements}
        </div>
    )
}