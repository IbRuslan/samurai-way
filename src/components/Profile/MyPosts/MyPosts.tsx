import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {Button} from "../../SuperButton/Button";
import imgAva from "../../../img/avatar/ava.jpg";
import {PostsType} from "../../../state/state";

type PostType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPost: (newText: string) => void
}

export const MyPosts:React.FC<PostType> = ({updateNewPost, posts, newPostText, addPost})=>{

    let postElements = posts.map( (p) => <Post messages={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLInputElement>();

    let addPostHandler = () => {
        addPost();
    }

    const onPostChange = () => {
        if (newPostElement.current) {
        let text = newPostElement.current.value;
        updateNewPost(text)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.new_post_container}>
                <div className={s.avatar}>
                    <img src={imgAva} alt=''/>
                </div>
                <div className={s.addPost}>
                    <input onChange={onPostChange} ref={newPostElement} value={newPostText} />
                </div>
                <div className={s.button}>
                    <Button name={'Add'} callback={addPostHandler}/>
                </div>
            </div>
            {postElements}
        </div>
    )
}