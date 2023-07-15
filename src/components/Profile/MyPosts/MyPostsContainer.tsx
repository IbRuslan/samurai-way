import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {

                const state = store.getState().profilePage;
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const updateNewPostText = (text: string) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }
                return <MyPosts
                            posts={state.posts}
                            newPostText={state.newPostText}
                            updateNewPostText={updateNewPostText}
                            addPost={addPost}
                        />
            }}
        </StoreContext.Consumer>
    )
};

