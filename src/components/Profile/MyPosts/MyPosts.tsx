import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {Button} from "../../SuperButton/Button";
import imgAva from "../../../img/avatar/ava.jpg";
import {ActionType, PostsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostActionText} from "../../../redux/profile-reducer";

type PostType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<PostType> = ({dispatch, posts, newPostText}) => {

    let postElements = posts.map((p) => <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLInputElement>();

    let addPostHandler = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            dispatch(updateNewPostActionText(text))
        }
    }

    return (
        <div className={s.container}>
            <div className={s.new_post_container}>
                <div className={s.avatar}>
                    <img src={imgAva} alt=''/>
                </div>
                <div className={s.addPost}>
                    <input onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div className={s.button}>
                    <Button name={'Add'} callback={addPostHandler}/>
                </div>
            </div>
            {postElements}
        </div>
    )
}