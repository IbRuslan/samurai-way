import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {Button} from "../../SuperButton/Button";
import imgAva from "../../../img/avatar/ava.jpg";
import {PostsType} from "../../../state/state";

type PostType = {
    posts: PostsType[]
}

export const MyPosts:React.FC<PostType> = ({posts})=>{

    let postElements = posts.map( (p) => <Post messages={p.message} likesCount={p.likesCount}/>)

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