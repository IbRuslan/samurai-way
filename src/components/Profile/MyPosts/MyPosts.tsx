import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {Button} from "../../SuperComponents/SuperButton/Button";
import imgAva from "../../../img/avatar/ava.jpg";
import {PostsType} from "../../../redux/profile-reducer";

type PostType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostsType[]
    newPostText: string
}

export const MyPosts: React.FC<PostType> = (
    {
        posts,
        newPostText,
        ...props
    }
    ) => {

    let postElements = posts.map((p) =>
        <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = () => {
        if (newPostText.trim() !== '') {
            props.addPost()
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.new_post_container}>
                <div className={s.avatar}>
                    <img src={imgAva} alt=''/>
                </div>
                <div className={s.addPost}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div className={s.button}>
                    <Button name={'Add'} callback={addPostHandler}/>
                </div>
            </div>
                {postElements}
        </div>
    )
}