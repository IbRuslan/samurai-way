import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import imgAva from "../../../img/avatar/ava.jpg";
import {PostsType} from "../../../redux/profile-reducer";
import {MessageFormValues, SuperTextarea} from "../../SuperComponents/FormComponents/SuperTextarea";
import {reduxForm} from "redux-form";

type PostType = {
    addPost: (newPostText: string) => void
    posts: PostsType[]
}

export const MyPosts: React.FC<PostType> = (
    {
        posts,
        ...props
    }
    ) => {

    let postElements = posts.map((p) =>
        <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = (values: MessageFormValues) => {
        if (values.newMessageBody.trim() !== '') {
            props.addPost(values.newMessageBody)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.new_post_container}>
                <div className={s.avatar}>
                    <img src={imgAva} alt=''/>
                </div>
                <div className={s.addPost}>
                    <ReduxPostForm onSubmit={addPostHandler}/>
                </div>
            </div>
                {postElements}
        </div>
    )
}

export const ReduxPostForm = reduxForm<MessageFormValues, {}>({ form: 'postText' })(SuperTextarea);