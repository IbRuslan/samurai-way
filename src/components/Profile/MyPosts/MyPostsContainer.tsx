import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

