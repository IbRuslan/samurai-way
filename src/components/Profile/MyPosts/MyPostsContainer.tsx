import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {ActionType, PostsType} from "../../../redux/store";

export type PostContainerType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPostsContainer: React.FC<PostContainerType> = ({dispatch, posts, newPostText}) => {

    const addPost = () => {
        dispatch(addPostActionCreator())
    }
    const updateNewPostText = (text: string) => {
        dispatch(updateNewPostActionCreator(text))
    }

    return (
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            updateNewPostText={updateNewPostText}
            addPost={addPost}
        />)
        ;
};
