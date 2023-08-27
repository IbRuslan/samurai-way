import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../../redux/redux-store";
import { Dispatch } from 'redux'

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profile.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {

        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

